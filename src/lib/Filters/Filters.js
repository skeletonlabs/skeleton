
let style = '';
let Filter;
let appliedFilters = [];
let init = false;

export function filter(node, filter_name) {  
    
    // Disable filters using Firefox
    if(navigator.userAgent.indexOf('Firefox') > -1) { style = ''; }
    else { style =  `filter: url("#${filter_name}")`; }
    
    // Initiate the parent container when using the action the first time
    if(!init) { 
        let elem = document.createElement('div');
        elem.setAttribute('id', 'filter-parent');
        document.body.append(elem);
        init = true;
    }

    // If DOM does not contain the filter yet    
    if(!appliedFilters.includes(filter_name)){
        const target = document.createElement('div');
        target.setAttribute('class', 'filter-container');
        makeFilterComp(filter_name, target);
        document.getElementById('filter-parent').append(target);
        appliedFilters.push(filter_name);
    }

    // Set the attribute to the element
    node.setAttribute('style', `${style}`);
    console.log(appliedFilters);
}

// Import the filter and create a component from it 
async function makeFilterComp(filter_name, target){
    Filter = (await import(`../Filters/${filter_name}.svelte`)).default;
    const svelteComponent = new Filter({target});
}