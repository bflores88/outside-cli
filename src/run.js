import minimist from 'minimist';
import today from './cmds/today';
import version from './cmds/version';
import help from './cmds/help';
import forecast from './cmds/forecast';
import error from './utils/error';

const args = minimist(process.argv.slice(2));
let cmd = args._[0] || 'help';

if (args.version || args.v) {
	cmd = 'version';
}

if (args.help || args.h) {
	cmd = 'help';
}

switch (cmd) {
	case 'today':
		today(args);
		break;
	case 'version':
		version(args);
		break;
	case 'help':
		help(args);
		break;
	case 'forecast':
		forecast(args);
		break;
	default:
		error(`🚨 "${cmd}" is not a valid command!`, true);
}
