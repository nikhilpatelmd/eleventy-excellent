// src/_config/filters/markdown-format.js
// Adapted from Chris Burnell: https://chrisburnell.com/article/some-eleventy-filters/#markdown-format
// And made more robust to handle non-string inputs.

// Ensure you have markdown-it installed: npm install markdown-it
import markdownParser from 'markdown-it';

// Initialize MarkdownIt.
// You can configure options here if needed, e.g.:
// const markdown = markdownParser({
//   html: true,
//   breaks: true,
//   linkify: true
// });
// Eleventy Excellent might set these options when it initializes its own markdown-it instance
// in plugins.markdownLib. For consistency, you might want to match those options.
// Your .eleventy.js shows: eleventyConfig.setLibrary('md', plugins.markdownLib);
// This means plugins.markdownLib IS your primary markdown-it instance used by Eleventy for .md files.
// Using that instance here would be ideal if 'plugins.markdownLib' is easily importable and is the 'md' instance itself.

// For now, we'll use a local instance in this filter, but ensure its options
// match your site's main Markdown parsing if visual consistency is critical.
const markdown = markdownParser({
  html: true,    // Allow HTML tags in source
  breaks: true,  // Convert '\n' in paragraphs into <br>
  linkify: true  // Autoconvert URL-like text to links
});

export const markdownFormat = (inputString) => { // Renamed parameter to inputString for clarity
  // CRUCIAL CHECK: Ensure the input is a string before trying to render.
  if (typeof inputString === 'string') {
    return markdown.render(inputString);
  }
  // If inputString is not a string (e.g., undefined, null, object),
  // return an empty string to prevent errors.
  return '';
};
