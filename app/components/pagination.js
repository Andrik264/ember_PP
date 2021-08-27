import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';


export default class PaginationComponent extends Component {
  @computed('args.pagination.{page,pages}')
  get numbersForPagination() {
    const { pages } = this.args.pagination;
    const pageId = this.args.pagination.page;
    // const pageCount = this.args.pagination.pages;

    let numbers = [];
    const maxNumbersInPagination = 9;
    const minPageId = 6;
    const maxPageId = pages - 8; //pages = 20, 1...12,13,14,15,16,17,18,19,20 - maxPageId = 12 (12 + 8 = pages)
    const countOfNumbersToEachSide = 4;

    switch (true) {
      case pageId <= minPageId:
        for (
          let pageNumber = 1;
          pageNumber <= maxNumbersInPagination;
          pageNumber++
        ) {
          numbers.push(pageNumber);
        }
        break;

      case pageId >= maxPageId:
        for (let pageNumber = maxPageId; pageNumber <= pages; pageNumber++) {
          numbers.push(pageNumber);
        }
        break;

      default:
        for (
          let pageNumber = pageId - countOfNumbersToEachSide, count = 1;
          count <= maxNumbersInPagination;
          pageNumber++, count++
        ) {
          numbers.push(pageNumber);
        }
        break;
    }

    return numbers;
  }

  get pageId() {
    return this.args.pagination.page;
  }

  get previosPage() {
    return this.pageId - 1;
  }

  get nextPageId() {
    return this.pageId + 1;
  }
}
