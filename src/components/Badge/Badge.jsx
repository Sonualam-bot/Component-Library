import { Notification, Icon, Count, BadgeContainer, LetterBadge, Status } from "./Badge.Style"


export function renderCount(count) {
    if (count <= 20) {
        return count.toString();
    } else {
        return "20+"
    }
}


export { Notification, Icon, Count, BadgeContainer, LetterBadge, Status }