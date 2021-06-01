
# Currency Converter

## Project setup
```  
npm install  
```  

### Compiles and hot-reloads for development
```  
npm run serve  
```  

### Compiles and minifies for production
```  
npm run build  
```  

### Run your unit tests
```  
npm run test:unit  
```  

### Lints and fixes files
```  
npm run lint  
```  

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## About the project

### Technologies used:

This is a currency converter using VueJS and other libs like:
- Vuex
- Axios
- Vuetify
- Vue i18n

### Functionalities

The main functionality of the app is to convert an amount from one currency to another. It is also possible to check the current rates for the selected currency.

The app has been translated into English, Portuguese and Dutch (this one is not very accurate) using Vue i18n, and it is also possible to switch between dark and light themes. It is also responsive and mobile friendly.

### App structure

I used the recommended VueJS file structures and separated the files by type (components, routers, store, views, locale files and mixins) to make it easier to access and understand.

    |- /src  
    | |- /assets  
    | |- /components  
    | |- /locales  
    | |- /mixins  
    | |- /plugins  
    | |- /router  
    | |- /store  
    | |- /views

I also used configuration files, which can be useful when deploying to different environments and integrating with CI tools.

### Possible improvements

In a future version I could add unit and e2e tests, extend the localization tool with more languages, split the store to have one for each component and I would do a better handling of request errors by creating different warnings for different types of request errors.

### Observations

- I used Vuetify as a UI lib, and because of this, there was no need to create many CSS classes to style my components and pages, as the lib gave me almost everything I needed.

- If you look at the project components, you will find a `Counter` component that was made to update currency rates every hour due to the limitation on the previous API. I removed it from the UI after refactoring it to use the new API, but still left it in the code because I liked the implementation with the "watch" property.


