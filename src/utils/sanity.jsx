import {
  useSanityClient,
  createImageBuilder,
  portableTextToHtml,
} from "astro-sanity";
import getYoutubeId from "get-youtube-id";

// export const imageBuilder = createImageBuilder(useSanityClient());

const imageBuilder = createImageBuilder({
  projectId: "v9diiubf",
  dataset: "production",
});

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
    youtube: ({ value }) => {
      const id = getYoutubeId(value.url);
      const url = `https://www.youtube.com/embed/${id}`;
      if (!id) {
        return <div>Missing Youtube URL</div>;
      }
      return `<iframe
          class="block w-full lg:w-[600px] h-[400px] mx-auto mb-10"
          src=${url}
          title="YouTube Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>`;
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

  // list: {
  //   bullet: ({ value }) => {
  //     `<ul>
  //       ${value.children[0].text}
  //     </ul>`;
  //   },
  //   number: ({ value }) => {
  //     ` <ol>
  //       ${value.children[0].text}
  //     </ol>`;
  //   },
  // },
  // listItem: {
  //   bullet: ({ value }) => {
  //     `<li class="font-bold text-xl">
  //       ${value.children[0].text}
  //     </li>`;
  //   },
  //   number: ({ value }) => {
  //     `<ol>
  //       ${value.children[0].text}
  //     </ol>`;
  //   },
  // },
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
    link: ({ children, value }) => {
      return `<a class="text-accent" href=${value.href} ${
        value.blank && "target='_blank'"
      } >${children}</a>`;
    },
    internalLink: ({ children, value }) => {
      const { slug = {} } = value;
      const href = `/blog/${slug.current}`;
      return `<a class="text-accent" href=${href} ${
        value.blank && "target='_blank'"
      } >${children}</a>`;
    },
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, textStyle);
}
