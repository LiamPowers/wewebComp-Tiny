<template>
  <div>
    <editor
      v-bind:id="tinyID"
      api-key="l5amtod88464kdqjbn8ysvh8o6xlhda9qvxpqtmpdo111nh4"
      v-model="tinymceText"
      :init="{
        menubar: true,
        tinycomments_mode: 'embedded',
        menubar: false,
        toolbar_mode: 'sliding',
        branding: false,
        plugins: [
          'a11ychecker',
          'advlist',
          'advcode',
          'advtable',
          'autolink',
          'checklist',
          'export',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'powerpaste',
          'fullscreen',
          'formatpainter',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount',
          'mergetags',
          'emoticons',
        ],
        content_style: 'body {font-size: 14pt;}',

        toolbar:
          'undo redo | fontfamily fontsize forecolor |emoticons|mergetags| bold italic underline | link image| align lineheight | checklist numlist bullist indent outdent',
        mergetags_list: [
          {
            title: 'Insert Variables',
            menu: [
              {
                value: 'firstName',
                title: 'First Name',
              },
              {
                value: 'lastName',
                title: 'Last Name',
              },

              {
                value: 'companyName',
                title: 'Company Name',
              },
              {
                value: 'Title',
                title: 'Title',
              },
              {
                value: 'Salutation',
                title: 'Salutation',
              },

              {
                value: 'unsubscribe',
                title: 'Unsubscribe',
              },
            ],
          },
        ],
      }"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: Object, required: true },
  },

  components: {
    editor: Editor,
  },
  computed: {
    tinymceText: {
      get() {
        return typeof this.value === "string" ? this.value : "";
      },
      set(value) {
        this.setValue(value);
      },
    },
  },
  data() {},
  setup(props) {
    const { value, setValue } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: "value",
      type: "string",
      defaultValue: null,
    });
    return { value, setValue };
  },
};
</script>

<style lang="css" scoped></style>
