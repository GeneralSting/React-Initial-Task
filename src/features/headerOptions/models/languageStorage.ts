import i18next from "i18next";
import { defaultLocale, languages } from "../../languages";
import { ILocalStorage } from "../interfaces/ILocalStorage";

class LanguageStorage implements ILocalStorage {
  private static instance: LanguageStorage;
  private defaultValue: string;
  private storageName: string;

  // private constructor to prevent instantiation from outside
  private constructor(defaultValue: string) {
    this.defaultValue = defaultValue;
    this.storageName = "orqaTaskLanguage";
    !localStorage.getItem(this.storageName) && this.setValue(this.defaultValue);
    this.setI18nLanguage(this.getValue());
  }

  // public static method to get the singleton instance
  public static getInstance(
    defaultValue: string = defaultLocale
  ): LanguageStorage {
    if (!LanguageStorage.instance) {
      LanguageStorage.instance = new LanguageStorage(defaultValue);
    }
    return LanguageStorage.instance;
  }

  private setI18nLanguage(userLanguage: string): void {
    i18next.changeLanguage(userLanguage);
  }

  getValue(): string {
    const userLanguage = localStorage.getItem(this.storageName);
    if (userLanguage === null) {
      return this.defaultValue;
    }

    const validThemeValue = languages.filter(
      (language) => language.abbr === userLanguage
    );
    if (!Array.isArray(validThemeValue) || !validThemeValue.length) {
      // array does not exist, is not an array, or is empty
      this.setValue(this.defaultValue);
      return this.defaultValue;
    }

    return userLanguage;
  }

  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default LanguageStorage;
