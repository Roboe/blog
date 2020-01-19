---
title: Style guide
placeholder:
  link: https://wikipedia.org
  image-350px: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Village_without_photo.svg/350px-Village_without_photo.svg.png
  audio-ogg: https://upload.wikimedia.org/wikipedia/commons/0/03/Linus-linux.ogg
  audio-mp3: ''
  video-webm: https://static.fsf.org/nosvn/FSF30-video/FSF_30_720p.webm
  video-mp4: ''
  subtitles-en: https://static.fsf.org/nosvn/FSF30-video/captions/FSF_30_720p.en.vtt
  iframe-allowfullscreen: https://soyguijarro.github.io/browser-informer
---

<!-- Beginning of Styleguide -->

# Poor-But-Free Man's Styleguide

A quick-and-dirty frontend styleguide, designed to be copied and pasted into your CMS.

**This styleguide is based upon Poor Man's Styleguide, but all third party content has been replaced with [free content](https://en.wikipedia.org/wiki/Free_culture_movement) from privacy-respectful origins. [See the original at poormansstyleguide.com](http://poormansstyleguide.com)**

---

# Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

# Headings with Text

# Heading 1
Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
## Heading 2
Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
### Heading 3
Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
#### Heading 4
Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
##### Heading 5
Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
###### Heading 6
Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.

---

# Block Elements {#text-block}

## Paragraphs and Images {#paragraph}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.

![Placeholder Image and Some Alt Text]({{< param "placeholder.image-350px" >}} "A title element for this placeholder image.")

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.

## Blockquote

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
> "**This is a blockquote.** Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl."

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

## Figure-Caption

<figure>

![A placeholder figure image.]({{< param "placeholder.image-350px" >}})

<figcaption>The figcaption element example</figcaption>

</figure>

## Details-Summary

<details>
  <summary>The summary element example</summary>
  <p>The details example text. It may be styled differently based on what browser or operating system you are using.</p>
</details>

---

# Text Elements

The [a element](#) and [external a element]({{< param "placeholder.link" >}}) examples

The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples

The <acronym title="A Cowboy Ran One New York Marathon">ACRONYM</acronym> element example

The <b>b element</b> example

The <cite>cite element</cite> example

The `code element` example

The <data value="3967381398">data element</data> example

The <del>del element</del> example

The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples

The _em element_ example

The <i>i element</i> example

The <ins>ins element</ins> example

The <kbd>kbd element</kbd> example

The <mark>mark element</mark> example

The <q>q element</q> example

The <q>q element <q>inside</q> a q element</q> example

The <s>s element</s> example

The <samp>samp element</samp> example

The <small>small element</small> example

The <span>span element</span> example

The **strong element** example

The <sub>sub element</sub> example

The <sup>sup element</sup> example

The <time datetime="2005-05-15 19:00">time element</time> example

The <u>u element</u> example

The <var>var element</var> example</p>

---

# Monospace / Preformatted {#monospace}

Code block wrapped in "pre" and "code" tags

```
// Loop through Divs using Javascript.
var divs = document.querySelectorAll('div'), i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
}
```

Monospace Text wrapped in "pre" tags

<pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p></pre>

---

# List Types

## Ordered List

1. List Item 1
2. List Item 2
3. List Item 3
   1. List Item 3.1
   2. List Item 3.2
      1. List Item 3.2.1
      2. List Item 3.2.2
   3. List Item 3.3
4. List Item 4

## Unordered List

- List Item 1
- List Item 2
- List Item 3
  - List Item 3.1
  - List Item 3.2
    - List Item 3.2.1
    - List Item 3.2.2
  - List Item 3.3
- List Item 4

## Definition List

Definition Term 1
: Definition Description 1

Definition Term 2
: Definition Description 2

---

# Tables

<table cellspacing="0" cellpadding="0">
  <caption>This is a table caption</caption>
  <thead>
    <tr>
      <th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Division 1</td><td>Division 2</td><td>Division 3</td>
    </tr>
    <tr class="even">
      <td>Division 1</td><td>Division 2</td><td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td><td>Division 2</td><td>Division 3</td>
    </tr>
    <tr>
      <td colspan="3">A row with a cell spanning all 3 columns</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Table Footer 1</th><th>Table Footer 2</th><th>Table Footer 3</th>
    </tr>
  </tfoot>
</table>

---

# Media {#media-elements}

## The Audio Element:

<audio controls>
  <source src="{{< param "placeholder.audio-ogg" >}}" type="audio/ogg" />
  {{< ifparam "placeholder.audio-mp3" >}}<source src="{{< param "placeholder.audio-mp3" >}}" type="audio/mp3" />{{< /ifparam >}}
  Your browser does not support the audio element.
</audio>

## The Video Element:

<video width="320" height="240" controls>
  <source src="{{< param "placeholder.video-webm" >}}" type='video/webm;codecs="vp8, vorbis"' />
  {{< ifparam "placeholder.video-mp4" >}}<source src="{{< param "placeholder.video-mp4" >}}" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />{{< /ifparam >}}
  <track src="{{< param "placeholder.subtitles-en" >}}" label="English subtitles" kind="subtitles" srclang="en" default />
  Your browser does not support the video tag.
</video>

## Embedded content:

Iframe:

<iframe width="560" height="315" src="{{< param "placeholder.iframe-allowfullscreen" >}}" frameborder="0" allowfullscreen></iframe>

---

# Form Elements

The Fieldset:

<fieldset>
  <legend>Legend</legend>
  <p>The Form:</p>
  <form>
    <p>
      <label for="text_field">Text Field:</label>
      <br />
      <input type="text" id="text_field" />
    </p>
    <p>
      <label for="text_field_disabled">Disabled Text Field:</label>
      <br />
      <input type="text" id="text_field_disabled" disabled value="I'm disabled" />
    </p>
    <p>
      <label for="text_field_readonly">Readonly Text Field:</label>
      <br />
      <input type="text" id="text_field_readonly" readonly value="I'm readonly" />
    </p>
    <p>
      <label for="text_area">Text Area:</label>
      <br />
      <textarea id="text_area"></textarea>
    </p>
    <p>
      <label for="text_area_disabled">Disabled Text Area:</label>
      <br />
      <textarea id="text_area_disabled" disabled>I'm disabled</textarea>
    </p>
    <p>
      <label for="text_area_readonly">Readonly Text Area:</label>
      <br />
      <textarea id="text_area_readonly" readonly>I'm readonly</textarea>
    </p>
    <p>
      <label for="select_element">Select Element:</label>
      <br />
      <select id="select_element">
        <optgroup label="Option Group 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </optgroup>
        <optgroup label="Option Group 2">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3" disabled>Disabled Option</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label for="select_element_disabled">Disabled Select Element:</label>
      <br/>
      <select id="select_element_disabled" disabled>
        <option value="1">Unselectable Option</option>
        <option value="2">This option should not even be seen</option>
      </select>
    </p>
    <p>
      Radio Buttons:
      <br />
      <label><input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1</label>
      <br/>
      <label><input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2</label>
      <br/>
      <label><input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3</label>
      <br/>
      <label><input type="radio" class="radio" name="radio_button" value="radio_4" disabled /> Radio Disabled</label>
    </p>
    <p>
      Checkboxes:
      <br />
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Checkbox 1</label>
      <br/>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Checkbox 2</label>
      <br/>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Checkbox 3</label>
      <br/>
      <label><input type="checkbox" class="checkbox" name="checkboxes" value="check_4" disabled /> Checkbox Disabled</label>
    </p>
    <p>
      <label for="password">Password:</label>
      <br />
      <input type="password" class="password" id="password" />
    </p>
    <p>
      <label for="file">File Input:</label>
      <br />
      <input type="file" class="file" id="file" />
    </p>
    <h3>HTML5-specific Form Elements</h3>
    <p>
      <label for="email">Email:</label>
      <br />
      <input type="email" id="email" />
    </p>
    <p>
      <label for="url">URL:</label>
      <br />
      <input type="url" id="url" />
    </p>
    <p>
      <label for="tel">Telephone:</label>
      <br />
      <input type="tel" id="tel" />
    </p>
    <p>
      <label for="number">Number:</label>
      <br />
      <input type="number" id="number" min="0" max="10" step="1" value="5" />
    </p>
    <p>
      <label for="search">Search:</label>
      <br />
      <input type="search" id="search" />
    </p>
    <p>
      <label for="date">Date:</label>
      <br />
      <input type="date" id="date" />
    </p>
    <p>
      <label for="time">Time:</label>
      <br />
      <input type="time" id="time" />
    </p>
    <p>
      <label for="color">Color:</label>
      <br />
      <input type="color" id="color" />
    </p>
    <p>
      <label for="datalist">Datalist:</label>
      <br />
      <input list="browsers" name="browser" type="datalist" id="datalist" />
      <datalist id="browsers">
        <option value="Internet Explorer" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
    </p>
    <p>
      <label for="range">Range:</label>
      <br />
      <input type="range" id="range" name="points" min="1" max="10" />
    </p>
    <p>
      <label for="output">Output:</label>
      <br />
      <output name="result" id="output">42</output>
    </p>
    <p>
      <label for="progress">Progress:</label>
      <br />
      <progress id="progress" value="65" max="100"></progress>
    </p>
    <p>
      <label for="meter">Meter:</label>
      <br />
      <meter id="meter" min="200" max="500" value="350">350 degrees</meter>
    </p>
    <p>
      <button class="button">Button Element</button>
      <input class="button" type="reset" value="Clear" />
      <input class="button" type="submit" value="Submit" />
    </p>
  </form>
</fieldset>

<!-- End of Styleguide -->
