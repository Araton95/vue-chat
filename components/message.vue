<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <p class="text-center">{{ text }}</p>
      <hr />
    </div>
    <div class="wrap" v-else>
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
  width: 60%;
  padding: 1rem;
  margin: 0 1rem 1rem;
  box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
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
