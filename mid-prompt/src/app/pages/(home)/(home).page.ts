import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteMeta } from "@analogjs/router";

export const routeMeta: RouteMeta = {
  title: "Midjourney Prompt Generator",
  meta: [
    { name: "description", content: "Midjourney prompt generator" }
  ]
};

@Component({
  standalone: true,
  selector: "mid-prompt-(home)",
  imports: [CommonModule],
  templateUrl: "./(home).page.html",
  styleUrls: ["./(home).page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePage {
}
