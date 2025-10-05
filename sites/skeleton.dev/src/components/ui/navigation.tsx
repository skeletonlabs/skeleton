import { framework } from '@/lib/framework';
import type { NavigationGroup } from '@/lib/navigation';
import { useEffect } from 'react';

interface NavigationProps {
	navigationGroups: NavigationGroup[];
	url: URL;
}

export default function Navigation(props: NavigationProps) {
	const { navigationGroups, url } = props;

	useEffect(() => {
		const SIDEBAR_SCROLL_KEY = 'sidebar-scroll-position';

		function handleSidebarScroll(event: Event) {
			if (!(event.target instanceof HTMLElement)) {
				return;
			}
			sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(event.target.scrollTop));
		}

		function restoreScrollPosition() {
			const sidebar = document.querySelector('[data-navigation]');
			if (!sidebar) {
				return;
			}

			const scrollPosition = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
			sidebar.scrollTop = parseInt(scrollPosition ?? '0', 10);

			sidebar.removeEventListener('scroll', handleSidebarScroll);
			sidebar.addEventListener('scroll', handleSidebarScroll);
		}

		function rewriteAnchorHrefs(value: ReturnType<typeof framework.get>) {
			const anchors = document.querySelectorAll<HTMLAnchorElement>('a');
			for (const anchor of anchors) {
				if (!anchor.href.endsWith('meta')) {
					continue;
				}
				anchor.setAttribute('href', anchor.href.replace('meta', value));
			}
		}

		restoreScrollPosition();
		rewriteAnchorHrefs(framework.get());

		framework.subscribe((framework) => {
			rewriteAnchorHrefs(framework);
		});

		document.addEventListener('astro:after-swap', () => {
			restoreScrollPosition();
			rewriteAnchorHrefs(framework.get());
		});
	}, []);

	return (
		<aside className="text-sm grid gap-10">
			{navigationGroups.map((group) => (
				<nav className="flex flex-col gap-2" key={group.title}>
					<span className="text-sm font-bold ml-2">{group.title}</span>
					<ul className="flex flex-col gap-1">
						{group.items.map((item) => (
							<li key={item.title}>
								<a
									suppressHydrationWarning={true}
									href={String(item.href)}
									title={item.title}
									className="flex justify-between items-center"
								>
									<span className={`grow px-2 py-1 rounded-base ${url.pathname === item.href ? 'preset-tonal' : 'anchor'}`}>
										{item.title}
									</span>
									{item.tag && <span className="no-underline preset-tonal-primary text-xs px-1 capitalize rounded">{item.tag}</span>}
								</a>
							</li>
						))}
					</ul>
				</nav>
			))}
		</aside>
	);
}
