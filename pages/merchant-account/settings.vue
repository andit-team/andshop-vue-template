<template>
  <div class="merchant-settings-page card border-0 mt-0">
    <div class="card-body bg-white">
      <div class="dashboard-box">
        <div class="dashboard-title">
          <h4 class="text-capitalize mb-4 pb-2 border-bottom">Settings</h4>
        </div>
        <div class="dashboard-detail">
          <div class="account-setting mb-3">
            <h5 class="mb-3">Notifications</h5>
            <div class="row">
              <div class="col">
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input" type="radio" name="exampleRadios"
                    id="exampleRadios1" value="option1" checked>
                  <label class="form-check-label"
                    for="exampleRadios1">
                    Allow Desktop Notifications
                  </label>
                </div>
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input"
                      type="radio" name="exampleRadios"
                      id="exampleRadios2" value="option2">
                  <label class="form-check-label"
                      for="exampleRadios2">
                      Enable Notifications
                  </label>
                </div>
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input"
                      type="radio" name="exampleRadios"
                      id="exampleRadios3" value="option3">
                  <label class="form-check-label"
                      for="exampleRadios3">
                      Get notification for my own activity
                  </label>
                </div>
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input"
                      type="radio" name="exampleRadios"
                      id="exampleRadios4" value="option4">
                  <label class="form-check-label"
                      for="exampleRadios4">
                      DND
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="account-setting mb-3">
            <h5 class="mb-3">Deactivate account</h5>
            <div class="row">
              <div class="col">
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input"
                      type="radio" name="exampleRadios1"
                      id="exampleRadios4" value="option4" checked>
                  <label class="form-check-label"
                      for="exampleRadios4">
                      I have a privacy concern
                  </label>
                </div>
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input"
                      type="radio" name="exampleRadios1"
                      id="exampleRadios5" value="option5">
                  <label class="form-check-label"
                      for="exampleRadios5">
                      This is temporary
                  </label>
                </div>
                <div class="form-check pb-2">
                  <input class="radio_animated form-check-input"
                      type="radio" name="exampleRadios1"
                      id="exampleRadios6" value="option6">
                  <label class="form-check-label"
                      for="exampleRadios6">
                      other
                  </label>
                </div>
                <button type="button" class="theme-button small-button rounded mt-2">Deactivate Account</button>
              </div>
            </div>
          </div>
          <div class="account-setting mb-3">
            <h5 class="mb-3">Delete account</h5>
            <div class="row">
              <div class="col">
                <div class="form-check pb-2">
                    <input class="radio_animated form-check-input"
                        type="radio" name="exampleRadios3"
                        id="exampleRadios7" value="option7" checked>
                    <label class="form-check-label"
                        for="exampleRadios7">
                        No longer usable
                    </label>
                </div>
                <div class="form-check pb-2">
                    <input class="radio_animated form-check-input"
                        type="radio" name="exampleRadios3"
                        id="exampleRadios8" value="option8">
                    <label class="form-check-label"
                        for="exampleRadios8">
                        Want to switch on other account
                    </label>
                </div>
                <div class="form-check pb-2">
                    <input class="radio_animated form-check-input"
                        type="radio" name="exampleRadios3"
                        id="exampleRadios9" value="option9">
                    <label class="form-check-label"
                        for="exampleRadios9">
                        other
                    </label>
                </div>
                <button type="button" class="theme-button small-button rounded mt-2">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'merchantSettings',
  layout: 'merchant-dashboard',
}
</script>

<style>

</style>