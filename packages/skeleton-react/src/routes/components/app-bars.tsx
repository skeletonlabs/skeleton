import { AppBar, Toolbar } from "../../components/AppBar/AppBar";

function appbar() {
    return(
        <AppBar>
            <AppBar.Toolbar>
                <Toolbar.Lead>
                    <span>💀</span>
                    <span>Skeleton</span>
                </Toolbar.Lead>
                <Toolbar.Center>
                    Skeleton
                </Toolbar.Center>
                <Toolbar.Trail>
                    <span>Skeleton</span>
                    <span>💀</span>
                </Toolbar.Trail>
            </AppBar.Toolbar>
        </AppBar>   
    );
}

function appbarHeadline() {
    return(
        <>
        <h3 className="h3">Headline</h3>
        <AppBar>
            <AppBar.Toolbar>
                <Toolbar.Lead>
                    <span>💀</span>
                    <span>Skeleton</span>
                </Toolbar.Lead>
                <Toolbar.Trail>
                    <span>Skeleton</span>
                    <span>💀</span>
                </Toolbar.Trail>
            </AppBar.Toolbar>
            <AppBar.Headline base="text-center">
                <h1 className="h1">Headline</h1>
            </AppBar.Headline>
        </AppBar>   
        </>
    );
}

function appbarSticky() {
    return(
        <>
        <h3 className="h3">Sticky</h3>
        <div className="flex flex-col space-y-4 max-h-64 overflow-y-auto">
            <AppBar classes="sticky top-0">
                <AppBar.Toolbar>
                    <Toolbar.Lead>
                        <span>💀</span>
                        <span>Skeleton</span>
                    </Toolbar.Lead>
                    <Toolbar.Center>
                        Skeleton
                    </Toolbar.Center>
                    <Toolbar.Trail>
                        <span>Skeleton</span>
                        <span>💀</span>
                    </Toolbar.Trail>
                </AppBar.Toolbar>
            </AppBar>   
            <div>First line of the sticky AppBar</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
        </div>
        </>
    );
}

export function Component() {
    return(
        <>
            <h1 className="h1">AppBars</h1>
            {appbar()}
            {appbarHeadline()}
            {appbarSticky()}
        </>
    );
}