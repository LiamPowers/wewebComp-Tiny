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
        ],

        toolbar:
          'undo redo | fontfamily fontsize forecolor |emoticons|mergetags| bold italic underline | link image| align lineheight | checklist numlist bullist indent outdent',
        mergetags_list: [
          {
            title: 'Insert Variables',
            menu: [
              {
                value: 'placeholder@gmail.com',
                title: 'Email',
              },
              {
                value: 'firstName',
                title: 'First Name',
              },
              {
                value: '2pac',
                title: 'Last Name',
              },
              {
                value: 'Mobile',
                title: 'Mobile',
              },
              {
                value: 'linkedinUrl',
                title: 'LinkedIn URL',
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
                value: 'signature',
                title: 'Signature',
              },
              {
                value: 'unsubscribe',
                title: 'Unsubscribe',
              },
            ],
          },
        ],
      }"
      initial-value="Hello there"
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
  data() {
    return { tinyID: wwLib.wwUtils.getUniqueId() + "TinyMCE" };
  },
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
