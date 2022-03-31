<template>
  <v-container>
    <div class="text-h3 mt-5">2022 Dcard Backend Intern Homework</div>
    <v-divider class="my-5"></v-divider>
    <div class="text-h4"><v-icon icon="mdi-movie-open" />Demo</div>
    <div class="text-body-1" v-text="details.intro"></div>
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="tmpUrl"
          label="Enter An Url"
          required
          @keydown.enter="shortenUrl()"
        >
        </v-text-field>
        <v-btn @click="shortenUrl()"> Shorten! </v-btn>
      </v-card-text>
    </v-card>

    <v-divider class="my-5"></v-divider>

    <v-expansion-panels v-model="panel">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <div class="text-h4">All Shorten Urls</div>
          <v-spacer></v-spacer>
          <div class="text-subtitle" v-if="panel === 0">Close</div>
          <div class="text-subtitle" v-else>Expand</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Original Url</th>
                <th class="text-left">Short Url</th>
                <th class="text-left">Expire At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="shortUrl in shortUrls" :key="shortUrl._id">
                <td>
                  <a
                    :href="shortUrl.url"
                    target="_blank"
                    v-text="shortUrl.url"
                  ></a>
                </td>
                <td>
                  <v-card @click="copyUrl(shortUrl.shortUrl as string)">
                    <v-card-actions>
                      <v-icon icon="mdi-content-copy" />
                      {{ shortUrl.shortUrl }}
                    </v-card-actions>
                  </v-card>
                </td>
                <td>{{ utcToTaipeiTime(shortUrl.expireAt) }}</td>
                <td>
                  <v-btn @click="deleteUrl(shortUrl._id as string)">
                    <v-icon icon="mdi-delete" />
                    <span>delete</span>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-divider class="my-5"></v-divider>

    <div class="text-h4"><v-icon icon="mdi-folder-check" />Criteria</div>
    <v-card elevation="6" rounded class="my-5">
      <v-card-title v-for="criterion in criteria" :key="criterion">
        <v-icon icon="mdi-checkbox-marked" />
        <span v-text="criterion"></span>
      </v-card-title>
    </v-card>
    <v-card elevation="6" rounded class="my-5">
      <v-card-title>
        <v-icon icon="mdi-checkbox-marked" />
        <a
          href="https://github.com/qiyoudaoyi/eesoymilk-mevn#dcard-homework"
          class="text-decoration-none"
          target="_blank"
        >
          請在文件內說明如何啟動與作業架構的設計 => README.md
        </a>
      </v-card-title>
    </v-card>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      <span>Url Copied</span>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import ShortUrlService from "@/services/shortUrlService";
import { useRouter } from "vue-router";
import { format, utcToZonedTime } from "date-fns-tz";

const serverUrl = import.meta.env.VITE_VUE_APP_API_SERVER_URL as string;
const tmpUrl = ref("") as Ref<string>;
const shortUrls = await ShortUrlService.getShortUrls();
const router = useRouter();
const snackbar = ref(false) as Ref<boolean>;
const timeout = 1000;
const panel = ref(0) as Ref<number>;

const testUrl = async (url: string) => {
  let isValid = true;
  await fetch(url, { mode: "no-cors" }).catch(() => (isValid = false));
  return isValid;
};
const refreshPage = () => {
  router.go(0);
};
const shortenUrl = async () => {
  let url = tmpUrl.value;
  if (!url) return;
  if (!url.startsWith("http://") && !url.startsWith("https://"))
    url = "https://" + url;
  if (!(await testUrl(url))) return;
  const expireAt = new Date(Date.now() + 3600 * 1000);
  // console.log("before shortened!");
  const res = await ShortUrlService.createShortUrl({ url, expireAt });
  if (res) {
    console.log("shortened!");
    refreshPage();
  }
};
const deleteUrl = async (id: string) => {
  await ShortUrlService.deleteShortUrl(id);
  refreshPage();
};
const copyUrl = (url: string) => {
  snackbar.value = true;
  navigator.clipboard.writeText(`${serverUrl}/api/shortUrl/${url}`);
};

const timeZone = "Asia/Taipei";
const pattern = "yyyy/M/d HH:mm:ss (z)";

const utcToTaipeiTime = (utcDate: Date) =>
  format(utcToZonedTime(utcDate, timeZone), pattern);

const details = {
  intro:
    'You can simply type in the url you want shrink, then hit "Enter" or the button "SHORTEN!".',
  github:
    "Since the GitHub repo I link is this very entire website, I'll link the ecah functinality used in the homework respectively.",
};

const criteria = [
  "A RESTful API to upload a URL with its expired date and response with a shorten URL.",
  "An API to serve shorten URLs responded by upload API, and redirect to original URL. If URL is expired, please response with status 404.",
  "Please implement reasonable constrains and error handling of these 2 APIs.",
  "Many clients might access shorten URL simultaneously or try to access with non-existent shorten URL, please take performance into account.",
];
</script>
