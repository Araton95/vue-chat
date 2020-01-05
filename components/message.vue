<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <p class="text-xs-center">{{ text }}</p>
      <hr />
    </div>
    <div v-else>
      <div class="message" :class="{ owner }">
        <small>
          <strong>
            {{ name }}
          </strong>
        </small>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.system {
  margin-bottom: 1rem;

  p {
    margin-bottom: 1rem;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
}

.message {
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 1px 0 0 black;
  border-radius: 4px;
  background: #1976d2;

  p {
    margin-bottom: 0;
  }
}

.owner {
  background: #fff;
  color: black;
  align-self: flex-end;
}
</style>
