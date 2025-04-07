import bukhari from '../constants/the_9_books/bukhari.json';
import abudawud from '../constants/the_9_books/abudawud.json';
import ahmed from '../constants/the_9_books/ahmed.json';
import darimi from '../constants/the_9_books/darimi.json';
import ibnmajah from '../constants/the_9_books/ibnmajah.json';
import malik from '../constants/the_9_books/malik.json';
import muslim from '../constants/the_9_books/muslim.json';
import nasai from '../constants/the_9_books/nasai.json';
import tirmidhi from '../constants/the_9_books/tirmidhi.json';

const books: Record<string, any> = {
  bukhari,
  abudawud,
  ahmed,
  darimi,
  ibnmajah,
  malik,
  muslim,
  nasai,
  tirmidhi,
};

export const getBookData = (name: string) => {
  return books[name] || null;
};