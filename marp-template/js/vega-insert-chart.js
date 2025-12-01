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
 * 3. In your slide, create a container:
 *    <div class="interactive-chart" id="my-chart"></div>
 *    <div class="img-chart">
 *      <img src="path/to/fallback.png" alt="Chart fallback"/>
 *    </div>
 * 
 * 4. Call the insertion function:
 *    <script>
 *      insertChart('my-chart', './chart/my-spec.json', '100%', '450px');
 *    </script>
 * 
 * @param {string} chartId - ID of the container element
 * @param {string} schemaUrl - Path to the Vega-Lite JSON specification
 * @param {string} width - Chart width (e.g., '100%', '600px')
 * @param {string} height - Chart height (e.g., '450px')
 */
function insertChart(chartId, schemaUrl, width, height) {
    document.addEventListener('DOMContentLoaded', function () {
        const chartDiv = document.getElementById(chartId);
        
        if (!chartDiv) {
            console.error(`Chart container with id '${chartId}' not found`);
            return;
        }

        // Create Vega chart element
        const chart = document.createElement('vegachart');
        chart.style.width = width;
        chart.style.height = height;
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
                        'renderer': 'canvas'
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
 * @param {string} width - Chart width
 * @param {string} height - Chart height
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
        chart.style.width = width;
        chart.style.height = height;
        chartDiv.appendChild(chart);

        // Embed the chart
        setTimeout(() => {
            vegaEmbed(chart, spec, { 
                'actions': false,
                'renderer': 'canvas'
            });
        }, 250);
    });
}
