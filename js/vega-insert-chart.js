/**
 * Vega-Lite Chart Insertion Utility for Marp Presentations
 * 
 * This utility allows embedding interactive Vega-Lite charts in Marp slides
 * with automatic fallback to static images for PDF exports.
 * 
 * Usage:
 * 1. Add Vega libraries in your markdown header:
 *    <script src="https://cdn.jsdelivr.net/npm/vega@5.30.0"></script>
 *    <script src="https://cdn.jsdelivr.net/npm/vega-lite@5.21.0"></script>
 *    <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.26.0"></script>
 * 
 * 2. Include this script:
 *    <script src="path/to/vega-insert-chart.js"></script>
 * 
 * 3. Add CSS for responsive containers (in your theme or slide):
 *    <style>
 *      .chart-container { width: 100%; height: 450px; }
 *      .chart-small { width: 48%; height: 350px; display: inline-block; margin: 1%; }
 *    </style>
 * 
 * 4. In your slide, create a container:
 *    <div class="chart-container" id="my-chart"></div>
 * 
 * 5. Call the insertion function:
 *    <script>
 *      insertChart('my-chart', './chart/my-spec.json');
 *    </script>
 * 
 * @param {string} chartId - ID of the container element
 * @param {string} schemaUrl - Path to the Vega-Lite JSON specification
 * @param {string} width - Optional: Chart width (overrides container, e.g., '100%', '600px')
 * @param {string} height - Optional: Chart height (overrides container, e.g., '450px')
 */
function insertChart(chartId, schemaUrl, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        const chartDiv = document.getElementById(chartId);
        
        if (!chartDiv) {
            console.error(`Chart container with id '${chartId}' not found`);
            return;
        }

        // Use a standard block container for predictable sizing and pointer mapping.
        const chart = document.createElement('div');
        
        // Apply responsive sizing: use provided dimensions or fill container
        if (width || height) {
            if (width) chart.style.width = width;
            if (height) chart.style.height = height;
        } else {
            // Default to fill parent container responsively
            chart.style.width = '100%';
            chart.style.height = '100%';
        }
        
        chart.setAttribute('schema-url', schemaUrl);

        // Append to container
        chartDiv.appendChild(chart);

        // Load and embed the chart after a short delay to ensure DOM is ready
        setTimeout(() => {
            fetch(schemaUrl)
                .then(response => response.json())
                .then(schema => {
                    vegaEmbed(chart, schema, { 
                        'actions': false,
                        // SVG is more reliable than canvas inside Marp's scaled slide viewport.
                        'renderer': 'svg'
                    });
                })
                .catch(error => {
                    console.error(`Error loading chart from ${schemaUrl}:`, error);
                });
        }, 250);
    });
}

/**
 * Alternative function for directly embedding a Vega-Lite specification object
 * 
 * @param {string} chartId - ID of the container element
 * @param {object} spec - Vega-Lite specification object
 * @param {string} width - Optional: Chart width (overrides container)
 * @param {string} height - Optional: Chart height (overrides container)
 */
function insertChartFromSpec(chartId, spec, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        const chartDiv = document.getElementById(chartId);
        
        if (!chartDiv) {
            console.error(`Chart container with id '${chartId}' not found`);
            return;
        }

        // Create container for Vega chart
        const chart = document.createElement('div');
        
        // Apply responsive sizing: use provided dimensions or fill container
        if (width || height) {
            if (width) chart.style.width = width;
            if (height) chart.style.height = height;
        } else {
            // Default to fill parent container responsively
            chart.style.width = '100%';
            chart.style.height = '100%';
        }
        
        chartDiv.appendChild(chart);

        // Embed the chart
        setTimeout(() => {
            vegaEmbed(chart, spec, { 
                'actions': false,
                // SVG is more reliable than canvas inside Marp's scaled slide viewport.
                'renderer': 'svg'
            });
        }, 250);
    });
}

/**
 * Plotly Chart Insertion Utility
 *
 * @param {string} chartId - ID of the container element
 * @param {string} schemaUrl - Path to the Plotly JSON specification
 * @param {string} width - Chart width (e.g., '100%', '600px')
 * @param {string} height - Chart height (e.g., '450px')
 */
function insertPlotlyChart(chartId, schemaUrl, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        const chartDiv = document.getElementById(chartId);

        if (!chartDiv) {
            console.error(`Chart container with id '${chartId}' not found`);
            return;
        }

        // Set container dimensions and prevent overflow
        chartDiv.style.width = width;
        chartDiv.style.height = height;
        chartDiv.style.overflow = 'hidden';
        chartDiv.style.boxSizing = 'border-box';

        setTimeout(() => {
            fetch(schemaUrl)
                .then(response => response.json())
                .then(spec => {
                    const data = spec.data || [];
                    let layout = spec.layout || {};
                    
                    // Remove or override hardcoded dimensions from layout to respect container
                    layout = {
                        ...layout,
                        width: null,  // Let Plotly use container width
                        height: null, // Let Plotly use container height
                        margin: layout.margin || { b: 10, l: 10, r: 10, t: 60 }
                    };
                    
                    const config = {
                        ...(spec.config || {}),
                        responsive: true,
                        displayModeBar: false
                    };

                    Plotly.newPlot(chartDiv, data, layout, config);
                    
                    // Force Plotly to respect container dimensions
                    Plotly.relayout(chartDiv, {
                        width: chartDiv.offsetWidth,
                        height: chartDiv.offsetHeight
                    });
                })
                .catch(error => {
                    console.error(`Error loading plotly chart from ${schemaUrl}:`, error);
                });
        }, 250);
    });
}

/**
 * Alternative function for directly embedding a Plotly specification object
 *
 * @param {string} chartId - ID of the container element
 * @param {object} spec - Plotly specification object
 * @param {string} width - Chart width
 * @param {string} height - Chart height
 */
function insertPlotlyChartFromSpec(chartId, spec, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        const chartDiv = document.getElementById(chartId);

        if (!chartDiv) {
            console.error(`Chart container with id '${chartId}' not found`);
            return;
        }

        // Set container dimensions and prevent overflow
        chartDiv.style.width = width;
        chartDiv.style.height = height;
        chartDiv.style.overflow = 'hidden';
        chartDiv.style.boxSizing = 'border-box';

        setTimeout(() => {
            let layout = spec.layout || {};
            
            // Remove or override hardcoded dimensions from layout to respect container
            layout = {
                ...layout,
                width: null,  // Let Plotly use container width
                height: null, // Let Plotly use container height
                margin: layout.margin || { b: 10, l: 10, r: 10, t: 60 }
            };
            
            const data = spec.data || [];
            const config = {
                ...(spec.config || {}),
                responsive: true,
                displayModeBar: false
            };

            Plotly.newPlot(chartDiv, data, layout, config);
            
            // Force Plotly to respect container dimensions
            Plotly.relayout(chartDiv, {
                width: chartDiv.offsetWidth,
                height: chartDiv.offsetHeight
            });
        }, 250);
    });
}
