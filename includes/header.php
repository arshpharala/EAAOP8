    <?php require_once 'config.php'; ?>
    <header id="navbar" class="ku-header">
      <div class="container">
        <div class="ku-header__content">
          <div class="ku-header__left">
            <a href="<?php echo url(); ?>">
              <img
                src="assets/images/ku-logo.png"
                alt="Khalifa University Logo"
                class="ku-header__logo" />
            </a>
            <img
              src="assets/images/logo2.png"
              alt="Khalifa University Logo"
              class="ku-header__logo"
              id="header_logo" />
          </div>

          <div class="ku-header__navs">
            <nav class="ku-header__nav">
              <div>
                <ul class="ku-nav__list">
                  <li><a href="<?php echo url(); ?>" class="ku-nav__link">HOME</a></li>
                  <li>
                    <a href="<?php echo url('committees'); ?>" class="ku-nav__link">COMMITTEEs</a>
                  </li>
                  <li>
                    <a href="<?php echo url('speakers'); ?>" class="ku-nav__link">SPEAKERS</a>
                  </li>
                  <li><a href="<?php echo url('#program'); ?>" class="ku-nav__link">PROGRAM</a></li>
                  <li>
                    <a href="<?php echo url('#registration'); ?>" class="ku-nav__link">registration</a>
                  </li>
                </ul>
                <ul class="ku-nav__list" style="margin-top: 0.3rem">
                  <li><a href="<?php echo url('#call-for-abstract'); ?>">submit Abstract</a></li>
                  <li><a href="<?php echo url('#special-issues'); ?>">special issues</a></li>

                  <li><a href="<?php echo url('#venue'); ?>" class="ku-nav__link">venue</a></li>
                  <li>
                    <a href="<?php echo url('#sponsorship'); ?>" class="ku-nav__link">sponsors</a>
                  </li>
                </ul>
              </div>

              <button>
                <a href="mailto:eaaop8@ku.ac.ae" class="button-shape-contact">CONTACT US</a>
              </button>
            </nav>

            <button
              class="ku-header__menu-toggle"
              id="menuToggle"
              aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>