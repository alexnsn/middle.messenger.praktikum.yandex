import Handlebars from "handlebars";
import { chatsTemplate } from "./Chats";

export const Chats = () => Handlebars.compile(chatsTemplate)();
