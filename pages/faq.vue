<template>
  <div>
    <!-- Breadcrumb Area Start ------------->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">FAQ</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End ------------->

    <section class="section-t-space">
      <div class="container">
        <div class="row">
          <!-- FAQ Tablist -->
          <div class="col-sm-12">
            <h3 class="support-title mb-3 text-center">Frequently Asked Questions</h3>
            <div class="accordion mb-4 mt-5" role="tablist">
              <h5 class="mb-3">BONUS RELATED</h5>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                    <h6 class="m-0 position-relative">
                      <a v-b-toggle.accordion-1 class="text-hover-color" href="javascript: void(0);">
                        Lift and bookings
                        <i class="fas fa-minus accordion-arrow"></i>
                      </a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-2 class="text-hover-color" href="javascript: void(0);">
                      Account and payments
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                      When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                      If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. 
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-3 class="text-hover-color" href="javascript: void(0);">
                      Legislation and tax
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                      When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                      If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                    <h6 class="m-0 position-relative">
                      <a v-b-toggle.accordion-4 class="text-hover-color" href="javascript: void(0);">
                          Ratings and reviews
                        <i class="fas fa-minus accordion-arrow"></i>
                      </a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                    </b-card-body>
                  </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-5 class="text-hover-color" href="javascript: void(0);">
                        Sub-routes and via points
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                  <b-collapse id="accordion-5" accordion="my-accordion2" role="tabpanel">
                      <b-card-body>
                        <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>
            </div>

            <div class="accordion mb-4 mt-5" role="tablist">
              <h5 class="mb-3">PORTAL RELATED</h5>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                    <h6 class="m-0 position-relative">
                      <a v-b-toggle.accordion-1 class="text-hover-color" href="javascript: void(0);">
                        Lift and bookings
                        <i class="fas fa-minus accordion-arrow"></i>
                      </a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-2 class="text-hover-color" href="javascript: void(0);">
                      Account and payments
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                      When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                      If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. 
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-3 class="text-hover-color" href="javascript: void(0);">
                      Legislation and tax
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                      When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                      If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                    <h6 class="m-0 position-relative">
                      <a v-b-toggle.accordion-4 class="text-hover-color" href="javascript: void(0);">
                          Ratings and reviews
                        <i class="fas fa-minus accordion-arrow"></i>
                      </a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                    </b-card-body>
                  </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-5 class="text-hover-color" href="javascript: void(0);">
                        Sub-routes and via points
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                  <b-collapse id="accordion-5" accordion="my-accordion2" role="tabpanel">
                      <b-card-body>
                        <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>
            </div>

            <div class="accordion mb-4 mt-5" role="tablist">
              <h5 class="mb-3">APPLICATION RELATED</h5>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                    <h6 class="m-0 position-relative">
                      <a v-b-toggle.accordion-1 class="text-hover-color" href="javascript: void(0);">
                        Lift and bookings
                        <i class="fas fa-minus accordion-arrow"></i>
                      </a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. 
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-2 class="text-hover-color" href="javascript: void(0);">
                      Account and payments
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                      When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                      If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. 
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-3 class="text-hover-color" href="javascript: void(0);">
                      Legislation and tax
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                      When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                      If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                    <h6 class="m-0 position-relative">
                      <a v-b-toggle.accordion-4 class="text-hover-color" href="javascript: void(0);">
                          Ratings and reviews
                        <i class="fas fa-minus accordion-arrow"></i>
                      </a>
                    </h6>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                    </b-card-body>
                  </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0 position-relative">
                    <a v-b-toggle.accordion-5 class="text-hover-color" href="javascript: void(0);">
                        Sub-routes and via points
                      <i class="fas fa-minus accordion-arrow"></i>
                    </a>
                  </h6>
                </b-card-header>
                  <b-collapse id="accordion-5" accordion="my-accordion2" role="tabpanel">
                      <b-card-body>
                        <b-card-text>The cancellation policy only applies to confirmed bookings. Pending requests can always be canceled free of charge.

                        When the booking is accepted, the amount will be charged to the passenger's payment card. The payment is only transferred to the motorist 24 hours after the lift has been run. 

                        If the lift is canceled before it is driven, the amount will be returned to the passenger's bank account. The repayment takes place in most cases within 1-2 banking days, depending on the individual bank and its repayment period. </b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>
            </div>
          </div>
          <!-- FAQ Tablist -->
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Faq"
}
</script>

<style scoped>

</style>
