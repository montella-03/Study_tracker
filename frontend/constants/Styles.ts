import React from "react";


    const h1Style = {
        fontSize: 'var(--lumo-font-size-l)',
        lineHeight: 'var(--lumo-size-l)',
        margin: '0 var(--lumo-space-m)',
    };

    const h2Style = {
        fontSize: 'var(--lumo-font-size-l)',
        margin: 0,
    };

    const iconStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        marginInlineEnd: 'var(--lumo-space-m)',
        padding: 'var(--lumo-space-xs)',
    };

    const avatarStyle: React.CSSProperties = {
        marginInlineEnd: 'var(--lumo-space-xl)',
        padding: 'var(--lumo-space-xl)',
    }


export {h2Style,h1Style,iconStyle,avatarStyle};