# CSS Houdini Blobs

A CSS Houdini Paint Worklet to draw blobs.

![CSS Houdini Blobs](https://github.com/timbroddin/css-houdini-blobs/blob/main/assets/screenshot.jpg?raw=true)

## Usage

### 1. Getting `css-houdini-blobs`

#### Using a pre-built hosted version

The easiest way to get `css-houdini-blobs` is to use the prebuilt version through UNPKG. Just skip ahead to step 2 in that case.

#### Installing it Locally

You can install the `css-houdini-blobs` locally using NPM.

```bash
npm install @timbroddin/css-houdini-blobs
```

Alternatively you can clone [the `css-houdini-blobs` repo](https://github.com/timbroddin/css-houdini-blobs/) and after manually build the project:

```bash
cd css-houdini-blobs
npm install
npm run build
```

You'll find the built file in the `./dist` folder.

### 2. Loading `css-houdini-blobs`

To include it you must loads the module in the given JavaScript file and add it to the Paint Worklet.

If you want to use the UNPKG hosted version of `css-houdini-blobs`, use `https://unpkg.com/@timbroddin/css-houdini-blobs/dist/blobs.js` as the `moduleURL`.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule(
    "https://unpkg.com/@timbroddin/css-houdini-blobs/dist/blobs.js"
  );
}
```

If you've installed `css-houdini-blobs` using NPM or have manually built it, refer to its url:

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("url/to/blobs.js");
}
```

#### A note on older browsers

To add support for [browsers that don't speak Houdini](https://ishoudinireadyyet.com/), you can include the [css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) before loading the Worklet.

```html
<script>
  (async function () {
    if (CSS["paintWorklet"] === undefined) {
      await import("https://unpkg.com/css-paint-polyfill");
    }

    CSS.paintWorklet.addModule(
      "https://unpkg.com/@timbroddin/css-houdini-blobs/dist/blobs.js"
    );
  })();
</script>
```

### 3. Applying `css-houdini-blobs`

To use the Paint Worklet you need to set the `background-image` property to `paint(blobs)`

```css
.element {
  background-image: paint(blobs);
}
```

## Configuration

You can tweak the appearance of the Cicles Paint Worklet by setting some CSS Custom Properties

| property           | description                                                                                                                                                                                    | default value      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| --colors           | **Colors To Use**, one or more hexadecimal colors comma separated                                                                                                                              | `#71a7ee, #7940c1` |
| --min-extra-points | **Minimum extra points**, the minimum amount of extra points (you get 3 points for free) for each blob                                                                                         | `1`                |
| --max-extra-points | **Maximum extra points**, the maximum amount of extra points (you get 3 points for free) for each blob                                                                                         | `1`                |
| --min-randomness   | **Minimum randomness**, the minimum amount of randomness to add to each point                                                                                                                  | `20`               |
| --max-randomness   | **Maximum randomness**, the maximum amount of randomness to add to each point                                                                                                                  | `20`               |
| --min-size         | **Minimum size**, the minimum size of each blob                                                                                                                                                | `20`               |
| --max-size         | **Maximum size**, the maximum size of each blob                                                                                                                                                | `400`              |
| --num-blobs        | **Number of blobs to draw**                                                                                                                                                                    | `5`                |
| --offset-x         | **X-offset**                                                                                                                                                                                   | `0`                |
| --offset-x y       | **Y-offset**                                                                                                                                                                                   | `0`                |
| --min-opacity      | **Minimum Opacity**, minimum blob opacity (as a float: 0.00 – 1.00)                                                                                                                            | `0.5`              |
| --max-opacity      | **Maximum Opacity**, maximum blob opacity (as a float: 0.00 – 1.00)                                                                                                                            | `1`                |
| --seed             | **Seed for the "predictable random" generator**, See [https://jakearchibald.com/2020/css-paint-predictably-random/](https://jakearchibald.com/2020/css-paint-predictably-random/) for details. | `0`                |

_💡 The Worklet provides default values so defining them is not required_

### Example

```css
.element {
  --min-extra-points: 0;
  --max-extra-points: 1;
  --min-randomness: 50;
  --max-randomness: 50;
  --min-size: 20;
  --max-size: 200;
  --num-blobs: 20;
  --offset-x: 0;
  --offset-y: 0;
  --seed: 1234;
  --colors: #71a7ee, #7940c1, #f0e891;
  --min-opacity: 0.1;
  --max-opacity: 0.5;
  background: paint(blobs);
}
```

### Registering the Custom Properties

To properly animate the Custom Properties and to make use of the built-in syntax validation you [need to register the Custom Properties](https://web.dev/at-property/). Include this CSS Snippet to do so:

```css
@property --colors {
  syntax: "<color>#";
  initial-value: #71a7ee, #7940c1;
  inherits: false;
}

@property --min-extra-points {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --max-extra-points {
  syntax: "<number>";
  initial-value: 1;
  inherits: false;
}

@property --min-size {
  syntax: "<number>";
  initial-value: 20;
  inherits: false;
}

@property --max-size {
  syntax: "<number>";
  initial-value: 200;
  inherits: false;
}

@property --num-blobs {
  syntax: "<number>";
  initial-value: 20;
  inherits: false;
}

@property --offset-x {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --offset-y {
  syntax: "<number>";
  initial-value: 0;
  inherits: false;
}

@property --seed {
  syntax: "<number>";
  initial-value: 123;
  inherits: true;
}

@property --min-opacity {
  syntax: "<number>";
  initial-value: 0.1;
  inherits: false;
}

@property --max-opacity {
  syntax: "<number>";
  initial-value: 0.5;
  inherits: false;
}
```

💡 Inclusion of this code snippet is not required, but recommended.

## Demo / Development

You can play with a small demo on over at [https://css-houdini-blobs.vercel.app/](https://css-houdini-blobs.vercel.app/)

If you've cloned the repo you can run `npm run demo` to launch the included demo.

## Acknowledgements

Inspired heavily by [css-houdini-circles](https://github.com/bramus/css-houdini-circles) by [@bramus](https://github.com/bramus) & made blobby by [blobs](https://github.com/g-harel/blobs).

Bramus's acknowledgements:
The structure of this project was borrowed from [The lines PaintWorklet](https://github.com/CSSHoudini/css-houdini/tree/main/src/lines) by [@nucliweb](https://github.com/nucliweb). More inspiration was fetched from [extra.css](https://github.com/una/extra.css/tree/master/lib) by [@una](https://github.com/una/)

## License

`css-houdini-blobs` is released under the MIT public license. See the enclosed `LICENSE` for details.
