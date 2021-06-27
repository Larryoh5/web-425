/**
 * * Title: book.interface.ts
 * Author: Larry Ohaka
 * Date: 6/25/21
 * Description: Navigation and Layout
 */
export interface IBook {
  /**Different field types */
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
