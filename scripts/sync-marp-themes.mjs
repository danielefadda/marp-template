#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const workspaceRoot = process.cwd();
const themesDir = path.join(workspaceRoot, 'themes');
const settingsPath = path.join(workspaceRoot, '.vscode', 'settings.json');

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function hasThemeDirective(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return /\/\*\s*@theme\s+[^\s*]+\s*\*\//m.test(content);
}

function collectThemeFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.scss'))
    .map((entry) => entry.name)
    .filter((name) => hasThemeDirective(path.join(dirPath, name)))
    .sort((a, b) => a.localeCompare(b));
}

function ensureSettingsDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function normalizeThemeList(value) {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item) => typeof item === 'string' && item.trim().length > 0)
    .map((item) => item.trim());
}

function main() {
  if (!fs.existsSync(themesDir)) {
    console.error(`Themes directory not found: ${themesDir}`);
    process.exit(1);
  }

  let settings = {};
  if (fs.existsSync(settingsPath)) {
    try {
      settings = readJson(settingsPath);
    } catch (error) {
      console.error(`Failed to parse ${settingsPath}: ${error.message}`);
      process.exit(1);
    }
  }

  const themeFiles = collectThemeFiles(themesDir);
  const themePaths = themeFiles.map((name) => `themes/${name}`);

  const existingThemes = normalizeThemeList(settings['markdown.marp.themes']);
  const mergedThemes = [...existingThemes];

  for (const themePath of themePaths) {
    if (!mergedThemes.includes(themePath)) {
      mergedThemes.push(themePath);
    }
  }

  settings['markdown.marp.themes'] = mergedThemes;

  ensureSettingsDir(settingsPath);
  fs.writeFileSync(settingsPath, `${JSON.stringify(settings, null, 2)}\n`, 'utf8');

  console.log('Updated markdown.marp.themes with:');
  for (const themePath of mergedThemes) {
    console.log(`- ${themePath}`);
  }
}

main();
