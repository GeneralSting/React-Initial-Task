# RAT - React App Template

## Template based on React and TypeScript

### Description

- This app or rather a template is the initial structure which can be used for app creation
- avoid setting up the project from scratch again. Get straight to the heart of the application by bypassing the initial steps needed when starting a new project
- template contains initial:
  1. website layout :white_check_mark:
  2. folder structure :white_check_mark:
  3. logic that can be easily adapted :white_check_mark:
- the template is not universal and is not intended for all react applications because certain technologies are used that will not be suitable for your project :heavy_exclamation_mark:

### Technologies

1. [**MUI**](https://mui.com) The React component library
   - creating website layout
   - grid view of components
   - creating themes
2. [**i18next**](https://www.i18next.com/): Internationalization-framework written in and for JavaScript
   - i18next initialization
   - creating translations
   - non-components translated (.ts files)
3. [**Redux**](https://react-redux.js.org/): Library for managing and centralizing application state
   - used to store simple values
   - real potential can be used in the further development of the project
4. [**React Router**](https://reactrouter.com/en/main): "Client side routing"

### Functionality

#### Architecture

- **@types**: type-safe translations i18next for TypeScript
- **components**: global shared components
- **features**: This folder contains the core functionalities and distinct features of the project. Each feature folder represents a specific aspect or capability of the application, encapsulating related components, logic, and resources.
  - **headerOptions**: logic contained on app's header. Change user preferences - theme and translation
  - **languages**: languages/translations that app support
  - **themes**: themes that app support
- **hooks**: global shared hooks
- **layout**: fixed layouts of website
- **models**: global shared models
- **pages**: main content
- **routes**: pages routes
- **service**: main api service, api service extends default abstract api class
- **types**: global shared types
- **utils**: global shared utils funcitons

[more about react project folder structure](https://github.com/GeneralSting/Frontend-documentation/blob/main/React/React%20folder%20structure.md)

#### Layout

- app has basic layout with header and footer components fixed, part which changes is main content represented as pages
- app layout supported via **MUI grid**

#### Themes

- there are four themes, it is possible to create new themes following the creation structure
  - create theme using MUI **createTheme** function
  - theme requires:
    - code (abbreviation) as the represented value of the theme
    - name, multiple names for each **.json translation file**
    - the theme itself **MUI Theme type**
  - add theme to the theme objects array with specified parameters

#### Translations

- two translations are supported by default - english and croatian
- create new translation:
  - create **.json translation file**
    - follow the existing format
    - it's essential to adhere to the key-value pairs defined in previous .json translation files, as new translations should align with the existing structure
    - update the previous .json files to incorporate the new translations. This ensures that the new language/translation is seamlessly integrated, maintaining consistency across all supported languages
  - update locales object which is needed for **i18next Resource type initialization**. Provide correct translation code/abbreviation and created .json file with translations

#### Redux

- **store.ts** is set up for the Redux store for the application by configuring reducers and middleware using **configureStore**. Reducer contains created slices
- Redux slices - encapsulates the logic for managing application options, providing action creators and reducers to update the state and persist changes to browser storage. Create new slice and import it into reducer inside store.ts
- adjusted approach is used in TypeScript to provide type safety when using Redux hooks **useDispatch** and **useSelector**

---

### Project

1. Git Clone

   - `git clone https://github.com/GeneralSting/React-App-Template`

2. Install Dependencies:

   - `npm install`

3. Build the Application:

   - `npm run build`

4. Start the Development Server:

   - `npm run dev`

5. Good Luck :wink:
