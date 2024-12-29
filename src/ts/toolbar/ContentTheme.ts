import {setContentTheme} from "../ui/setContentTheme";
import {getEventName} from "../util/compatibility";
import {MenuItem} from "./MenuItem";
import {hidePanel, toggleSubMenu} from "./setToolbar";

export class ContentTheme extends MenuItem {
    public element: HTMLElement;

    constructor(vditor: IVditor, menuItem: IMenuItem) {
        super(vditor, menuItem);

        const actionBtn = this.element.children[0] as HTMLElement;

        const panelElement = document.createElement("div");
        panelElement.className = `vditor-hint${menuItem.level === 2 ? "" : " vditor-panel--arrow"}`;
        let innerHTML = "";
        Object.keys(vditor.options.preview.theme.list).forEach((key) => {
            // 添加 id 以便能获取到主题设置时的 click 事件
            innerHTML += `<button id='content-theme-item' data-type="${key}">${vditor.options.preview.theme.list[key]}</button>`;
        });
        panelElement.innerHTML =
            `<div style="overflow: auto;max-height:${window.innerHeight / 2}px">${innerHTML}</div>`;
        panelElement.addEventListener(getEventName(), (event: MouseEvent & { target: HTMLElement }) => {
            if (event.target.tagName === "BUTTON") {
                hidePanel(vditor, ["subToolbar"]);
                vditor.options.preview.theme.current = event.target.getAttribute("data-type");
                setContentTheme(vditor.options.preview.theme.current, vditor.options.preview.theme.path);
                event.preventDefault();
                event.stopPropagation();
            }
        });
        this.element.appendChild(panelElement);

        toggleSubMenu(vditor, panelElement, actionBtn, menuItem.level);
    }
}
