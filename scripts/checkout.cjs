var shell = require("shelljs");

if (!shell.which("git")) {
	shell.echo("Sorry, this script requires git");
	shell.exit(1);
}

shell.exec(
	"git clone https://github.com/skeletonlabs/create-skeleton-app packages/create-skeleton-app"
);
shell.exec(
	"git clone https://github.com/skeletonlabs/skeletonlabs.co sites/skeletonlabs.co"
);
