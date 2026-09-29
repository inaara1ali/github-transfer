export function sampleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "number",
      name: "modal_id",
      nameOverride: "modal-id",
      label: "modal-id",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "img",
      label: "img",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "thumbnail",
    },
    {
      type: "string",
      name: "alt",
      label: "alt",
    },
    {
      type: "string",
      name: "project_date",
      nameOverride: "project-date",
      label: "project-date",
    },
    {
      type: "string",
      name: "client",
      label: "client",
    },
    {
      type: "string",
      name: "category",
      label: "category",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
  ];
}
