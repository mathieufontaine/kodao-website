import {
  useSanityClient,
  createImageBuilder,
  portableTextToHtml,
} from "astro-sanity";

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export const textStyle = {
  types: {
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="w-full"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
  },
  block: {
    h2: ({ value }) => {
      return `
      <h2 class="text-left py-10 font-semibold text-accent leading-12">
        ${value.children[0].text}
      </h2>`;
    },
    h3: ({ value }) => {
      return `
      <h3 class="text-left py-10 font-semibold">
        ${value.children[0].text}
      </h3>`;
    },
    h4: ({ value }) => {
      return `
      <h4 class="text-left  py-6">
        ${value.children[0].text}
      </h4>`;
    },

    blockquote: ({ value }) => {
      `<blockquote>
      ${value.children[0].text}
      </blockquote>`;
    },
    caption: ({ value }) => {
      return `<i class="text-center text-gray-500 mb-[30px] block text-md">
          ${value.children[0].text}
        </i>`;
    },
    // normal: ({ value }) => {
    //   `<p>
    //     ${value}
    //   </p>`;
    // },
  },

  list: {
    bullet: ({ value }) => {
      `<ul>
        ${value}
      </ul>`;
    },
    number: ({ value }) => {
      ` <ol>
        ${value}
      </ol>`;
    },
  },
  listItem: {
    bullet: ({ value }) => {
      `<ul>
        ${value}
      </ul>`;
    },
    number: ({ value }) => {
      `<ol>
        ${value}
      </ol>`;
    },
  },
  // mark: {
  //   code: (
  //     <code>
  //       <slot />
  //     </code>
  //   ),
  //   em: (
  //     <em>
  //       <slot />
  //     </em>
  //   ),
  //   link: (
  //     <a href="...">
  //       <slot />
  //     </a>
  //   ),
  //   "strike-through": (
  //     <del>
  //       <slot />
  //     </del>
  //   ),
  //   strong: (
  //     <strong>
  //       <slot />
  //     </strong>
  //   ),
  //   underline: (
  //     <span style="text-decoration: underline;">
  //       <slot />
  //     </span>
  //   ),
  // },
  marks: {
    highlight: ({ children }) => <mark>{children}</mark>,
    link: ({ value }) => {
      return `<a class="text-accent" href=${value.href} ${
        value.blank && "target='_blank'"
      } > ${value.href}</a>`;
    },
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, textStyle);
}
