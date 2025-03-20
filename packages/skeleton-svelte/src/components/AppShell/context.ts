export const appShellContextKey = 'appShell';

export interface AppShellContext {
    scrollTop: number;
    scrollBottom: number;
    shouldHideHeader: boolean;
    shouldHideFooter: boolean;
    headerHeight: number;
    footerHeight: number;
}
