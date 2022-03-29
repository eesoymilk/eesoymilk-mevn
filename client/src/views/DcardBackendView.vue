<template>
  <v-container>
    <div class="text-h3">2022 Dcard Backend Intern Homework</div>
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
          <td>{{ shortUrl.url }}</td>
          <td>
            <v-btn @click="copyUrl(shortUrl.shortUrl as string)">
              <v-icon icon="mdi-content-copy" />{{ shortUrl.shortUrl }}
            </v-btn>
          </td>
          <td>{{ shortUrl.expireAt }}</td>
          <td>
            <v-btn @click="deleteUrl(shortUrl._id as string)">
              <v-icon icon="mdi-delete" />
              <span>delete</span>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
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

const tmpUrl = ref("") as Ref<string>;
const shortUrls = await ShortUrlService.getShortUrls();
const router = useRouter();
const snackbar = ref(false) as Ref<boolean>;
const timeout = 1000;

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
  console.log("before shortened!");
  await ShortUrlService.createShortUrl({ url, expireAt });
  console.log("shortened!");
  refreshPage();
};
const deleteUrl = async (id: string) => {
  await ShortUrlService.deleteShortUrl(id);
  refreshPage();
};
const copyUrl = (url: string) => {
  snackbar.value = true;
  navigator.clipboard.writeText(url);
};
</script>
