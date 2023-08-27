export function clickOutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		// @ts-ignore
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(
				// @ts-ignore
				new CustomEvent('click_outside', node)
			)
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	}
}
