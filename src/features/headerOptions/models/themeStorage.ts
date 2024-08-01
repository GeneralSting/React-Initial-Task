import { appThemes, defaultTheme } from "../../themes";
import { ILocalStorage } from "../interfaces/ILocalStorage";

class ThemeStorage implements ILocalStorage {
  private static instance: ThemeStorage;
  private defaultValue: string;
  private storageName: string;

  // private constructor to prevent instantiation from outside
  private constructor(defaultValue: string) {
    this.defaultValue = defaultValue;
    this.storageName = "orqaTaskTheme";
    !localStorage.getItem(this.storageName) && this.setValue(this.defaultValue);
  }

  // public static method to get the singleton instance
  public static getInstance(defaultValue: string = defaultTheme): ThemeStorage {
    if (!ThemeStorage.instance) {
      ThemeStorage.instance = new ThemeStorage(defaultValue);
    }
    return ThemeStorage.instance;
  }

  // checks possible null or manually edited storage
  getValue(): string {
    const userTheme = localStorage.getItem(this.storageName);
    if (userTheme === null) {
      return this.defaultValue;
    }

    const validThemeValue = appThemes.filter((theme) => theme.code === userTheme);
    if (!Array.isArray(validThemeValue) || !validThemeValue.length) {
      // array does not exist, is not an array, or is empty
      this.setValue(this.defaultValue);
      return this.defaultValue;
    }

    return userTheme;
  }

  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default ThemeStorage;
