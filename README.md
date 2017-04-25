# Adam Sandoval Portfolio 
My personal website

## Requirements to run site locally
- Node `>=4`
- [NVM](https://github.com/creationix/nvm#install-script) (Node Version Manager)

## Setup 
Once you've installed Nodejs and NVM, open Terminal and run the following command to install the dependencies
```
npm install
```

## Build
After you've installed the dependencies, you can create a local server by running the following command: 
```
npm start
```

## Creating new slides
1. New menu items get a `data-slide-id` attribute on the link which matches the `data-slide` attribute on the actual slide
2. Then you'll use the following markup inside of the `<section class="slides">` container:
    ```HTML
    <div class="slide" data-slide="1" data-slide-bg="./path-to-image/img.png">
      <div class="slide__content">
        <div class="slide__width">
          <h1 class="slide__title">...</h1>
          <p class="slide__copy">...</p>
          <a href="..." class="slide__button">...</a>
        </div>
      </div>
    </div>
    <!-- end slide 1 -->
    ```