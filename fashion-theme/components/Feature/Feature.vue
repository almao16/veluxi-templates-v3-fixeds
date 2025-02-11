<template>
  <div class="root">
    <v-container fixed>
      <v-row class="spacing8">
        <v-col md="4" cols="12" class="py-1 px-8">
          <i class="icon ion-ios-world" />
          <v-divider class="divider" />
          <h5 class="use-text-subtitle">
            {{ $t('fashionLanding.feature_title1') }}
          </h5>
          <p class="use-text-paragraph">
            {{ $t('fashionLanding.feature_desc1') }}
          </p>
        </v-col>
        <v-col md="4" cols="12" class="py-1 px-8">
          <i class="icon ion-ribbon-b" />
          <v-divider class="divider" />
          <h5 class="use-text-subtitle">
            {{ $t('fashionLanding.feature_title2') }}
          </h5>
          <p class="use-text-paragraph">
            {{ $t('fashionLanding.feature_desc2') }}
          </p>
        </v-col>
        <v-col md="4" cols="12" class="py-1 px-8">
          <i class="icon ion-android-sync" />
          <v-divider class="divider" />
          <h5 class="use-text-subtitle">
            {{ $t('fashionLanding.feature_title3') }}
          </h5>
          <p class="use-text-paragraph">
            {{ $t('fashionLanding.feature_desc3') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>
