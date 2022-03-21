<template>
  <v-container>
    <h2>Backend</h2>
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
          <td>{{ shortUrl.shortUrl }}</td>
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
  </v-container>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import ShortUrlService from "@/services/shortUrlService";

const tmpUrl = ref("") as Ref<string>;
const shortUrls = await ShortUrlService.getShortUrls();

const testUrl = async (url: string) => {
  let isValid = true;
  await fetch(url, { mode: "no-cors" }).catch(() => (isValid = false));
  return isValid;
};
const shortenUrl = async () => {
  let url = tmpUrl.value;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  if (!(await testUrl(url))) return;
  const expireAt = new Date(Date.now() + 3600 * 1000);
  await ShortUrlService.createShortUrl({ url, expireAt });
};
const deleteUrl = async (id: string) =>
  await ShortUrlService.deleteShortUrl(id);
</script>
