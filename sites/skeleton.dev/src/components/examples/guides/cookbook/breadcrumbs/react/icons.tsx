import { ChevronRightIcon, CogIcon, HouseIcon } from 'lucide-react';

export default function Icons() {
	return (
		<ol className="flex items-center gap-4">
			<li>
				<a className="opacity-60 hover:opacity-100" href="#">
					<HouseIcon size={24} />
				</a>
			</li>
			<li className="opacity-50" aria-hidden>
				<ChevronRightIcon size={14} />
			</li>
			<li>
				<a className="opacity-60 hover:opacity-100" href="#">
					<CogIcon size={24} />
				</a>
			</li>
			<li className="opacity-50" aria-hidden>
				<ChevronRightIcon size={14} />
			</li>
			<li>Current</li>
		</ol>
	);
}
