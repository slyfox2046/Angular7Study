import { Injectable } from "@angular/core";
import { QuestionBase } from "./question-base";
import { QuestionDropdown } from "./question-dropdown";
import { QuestionTextbox } from "./question-textbox";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  constructor() {}
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new QuestionDropdown({
        key: "brave",
        label: "评级",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 3
      }),
      new QuestionTextbox({
        key: "firstName",
        label: "名字",
        value: "柳伟卫",
        required: true,
        order: 1
      }),
      new QuestionTextbox({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
