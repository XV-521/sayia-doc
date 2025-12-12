export function RightArrow(strokeWidth) {
    return `<svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M9 6l6 6-6 6" 
                    stroke="currentColor" 
                    stroke-width="${strokeWidth}" 
                    fill="none" 
                    stroke-linecap="square"/>
            </svg>
    `
}

export function LeftArrow(strokeWidth) {
    return `<svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M15 6l-6 6 6 6" 
                    stroke="currentColor" 
                    stroke-width="${strokeWidth}" 
                    fill="none" 
                    stroke-linecap="square"/>
            </svg>`
}

export function Copy(strokeWidth = 2) {
    return `
        <svg width="24" height="24" viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor"
             stroke-width="${strokeWidth}"
             stroke-linecap="round"
             stroke-linejoin="round">
        
            <defs>
                <mask id="cut-off">
                    <rect width="24" height="24" fill="white"/>
                    <rect x="4" y="6" width="12" height="14" rx="2" fill="black"/>
                </mask>
            </defs>
        
            <rect x="8" y="2" width="12" height="14" rx="2" mask="url(#cut-off)"/>
            <rect x="4" y="6" width="12" height="14" rx="2"/>
        </svg>
`
}