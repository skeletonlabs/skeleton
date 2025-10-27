/**
 * Script to filter out links with status code 200 from link-report.json
 * This will show only problematic links (non-200 status codes)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the link report (UTF-16 LE encoding)
const reportPath = path.join(__dirname, 'link-report.json');
const buffer = fs.readFileSync(reportPath);
// Decode UTF-16 LE and remove BOM
let fileContent = buffer.toString('utf16le');
if (fileContent.charCodeAt(0) === 0xfeff) {
	fileContent = fileContent.slice(1);
}
const reportData = JSON.parse(fileContent);

// Filter out links with status 200
const filteredLinks = reportData.links.filter((link) => link.status !== 200 && link.status !== 429);

// Create output object
const output = {
	...reportData,
	links: filteredLinks,
};

// Add summary
console.log('Link Report Summary:');
console.log('===================');
console.log(`Total links: ${reportData.links.length}`);
console.log(`Links with status 200: ${reportData.links.length - filteredLinks.length}`);
console.log(`Links with non-200 status: ${filteredLinks.length}`);
console.log('');

if (filteredLinks.length > 0) {
	console.log('Non-200 Status Links:');
	console.log('=====================');
	filteredLinks.forEach((link) => {
		console.log(`Status ${link.status}: ${link.url}`);
		if (link.parent) {
			console.log(`  Parent: ${link.parent}`);
		}
		if (link.failureDetails && link.failureDetails.length > 0) {
			console.log(`  Failures: ${JSON.stringify(link.failureDetails)}`);
		}
		console.log('');
	});
}

// Write filtered results to a new file
const outputPath = path.join(__dirname, 'link-report-filtered.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`Filtered report saved to: ${outputPath}`);
