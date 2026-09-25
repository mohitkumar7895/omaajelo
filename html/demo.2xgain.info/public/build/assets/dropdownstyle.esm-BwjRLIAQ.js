import{B as i}from"ripple.esm-BFXY1LLd.js";var a={root:"p-inputgroup"};i.extend({name:"inputgroup",classes:a});var s={root:"p-inputgroup-addon"};i.extend({name:"inputgroupaddon",classes:s});var d=`
@layer primevue {
    .p-virtualscroller {
        position: relative;
        overflow: auto;
        contain: strict;
        transform: translateZ(0);
        will-change: scroll-position;
        outline: 0 none;
    }

    .p-virtualscroller-content {
        position: absolute;
        top: 0;
        left: 0;
        /* contain: content; */
        min-height: 100%;
        min-width: 100%;
        will-change: transform;
    }

    .p-virtualscroller-spacer {
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        width: 1px;
        transform-origin: 0 0;
        pointer-events: none;
    }

    .p-virtualscroller .p-virtualscroller-loader {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-virtualscroller-loader.p-component-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-virtualscroller-loading-icon {
        font-size: 2rem;
    }

    .p-virtualscroller-loading-icon.p-icon {
        width: 2rem;
        height: 2rem;
    }

    .p-virtualscroller-horizontal > .p-virtualscroller-content {
        display: flex;
    }

    /* Inline */
    .p-virtualscroller-inline .p-virtualscroller-content {
        position: static;
    }
}
`;i.extend({name:"virtualscroller",css:d});var c={root:function(n){var e=n.instance,o=n.props,t=n.state;return["p-dropdown p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.$primevue.config.inputStyle==="filled","p-dropdown-clearable":o.showClear,"p-focus":t.focused,"p-inputwrapper-filled":e.hasSelectedOption,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-overlay-open":t.overlayVisible}]},input:function(n){var e,o=n.instance,t=n.props;return["p-dropdown-label p-inputtext",{"p-placeholder":!t.editable&&o.label===t.placeholder,"p-dropdown-label-empty":!t.editable&&!o.$slots.value&&(o.label==="p-emptylabel"||((e=o.label)===null||e===void 0?void 0:e.length)===0)}]},clearIcon:"p-dropdown-clear-icon",trigger:"p-dropdown-trigger",loadingicon:"p-dropdown-trigger-icon",dropdownIcon:"p-dropdown-trigger-icon",panel:function(n){n.props;var e=n.instance;return["p-dropdown-panel p-component",{"p-ripple-disabled":e.$primevue.config.ripple===!1}]},header:"p-dropdown-header",filterContainer:"p-dropdown-filter-container",filterInput:function(n){var e=n.props,o=n.instance;return["p-dropdown-filter p-inputtext p-component",{"p-variant-filled":e.variant?e.variant==="filled":o.$primevue.config.inputStyle==="filled"}]},filterIcon:"p-dropdown-filter-icon",wrapper:"p-dropdown-items-wrapper",list:"p-dropdown-items",itemGroup:"p-dropdown-item-group",itemGroupLabel:"p-dropdown-item-group-label",item:function(n){var e=n.instance,o=n.props,t=n.state,r=n.option,l=n.focusedOption;return["p-dropdown-item",{"p-highlight":e.isSelected(r)&&o.highlightOnSelect,"p-focus":t.focusedOptionIndex===l,"p-disabled":e.isOptionDisabled(r)}]},itemLabel:"p-dropdown-item-label",checkIcon:"p-dropdown-check-icon",blankIcon:"p-dropdown-blank-icon",emptyMessage:"p-dropdown-empty-message"};i.extend({name:"dropdown",classes:c});
