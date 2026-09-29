import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Resume",
        name: "resume",
        path: "_resume",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "markdown",
        label: "Blog Posts",
        name: "posts",
        path: "_posts",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle / App Link",
          },
          {
            type: "string",
            name: "layout",
            label: "Jekyll Layout Template",
          },
          {
            type: "string",
            name: "modal_id",
            nameOverride: "modal-id",
            label: "Modal View ID",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publishing Date",
          },
          {
            type: "string",
            name: "img",
            label: "Main Image Path",
          },
          {
            type: "string",
            name: "thumbnail",
            label: "Thumbnail Image Path",
          },
          {
            type: "string",
            name: "alt",
            label: "Image Alt Text",
          },
          {
            type: "string",
            name: "project_date",
            nameOverride: "project-date",
            label: "Project Timeline",
          },
          {
            type: "string",
            name: "client",
            label: "Project Client / Link",
          },
          {
            type: "string",
            name: "category",
            label: "Team Contributors / Category",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Main Document Content / Description",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "",
        match: {
          include: "index.html",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout Type",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
