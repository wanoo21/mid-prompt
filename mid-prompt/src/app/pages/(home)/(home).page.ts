import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteMeta } from "@analogjs/router";
import { HttpClient } from "@angular/common/http";

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
  host: { class: "flex flex-col h-full" },
  templateUrl: "./(home).page.html",
  styleUrls: ["./(home).page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePage {
  http = inject(HttpClient);
}
