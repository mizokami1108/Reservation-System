import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases } from "vuetify/iconsets/mdi-svg";
import "vuetify/styles";

const vuetify: any = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
  },
});

export default vuetify;
