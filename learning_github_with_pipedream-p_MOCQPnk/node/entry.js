// To use previous step data, pass the `steps` object to the run() function
export default defineComponent({
  async run({ steps, $ }) {
    // Return data to use it in future steps
    return steps.trigger.event
  },
})