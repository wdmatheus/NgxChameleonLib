/**
 * Chameleon - Soluções visuais para projetos da Nexaas
 * Version: 1.1.0
 * Homepage: http://docs.chameleon.nexaas.com/
 * Licensed under MIT
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

if (window.Chameleon === undefined) {
  window.Chameleon = {};
}
if (window.Chameleon.Components === undefined) {
  window.Chameleon.Components = {};
}
if (window.Chameleon.Plugins === undefined) {
  window.Chameleon.Plugins = {};
}

Chameleon.init = function () {

  var components = Object.keys(Chameleon.Components).map(function (key) {
    var component = Chameleon.Components[key];
    Chameleon[key.toLowerCase()] = new component();
  });
};

$(document).ready(function () {
  Chameleon.init();
});

Chameleon.Components.Account = function () {

  var Selector = {
    accountContent: '.ch-account-content',
    dropdownButton: '.ch-account-content .ch-dropdown-button',
    dropdownMenuItem: '.ch-dropdown-menu-item'
  };

  var ClassName = {
    open: 'open'
  };

  var toggle = function toggle(e) {
    e.preventDefault();
    $(Selector.accountContent).find(Selector.dropdownMenuItem).removeClass(ClassName.open);
    $(this).parent(Selector.dropdownMenuItem).addClass(ClassName.open);
  };

  $(document).on('click', Selector.dropdownButton, toggle);
};

Chameleon.Components.Dropdown = function () {
  var Selector = {
    closeButton: '.ch-dropdown .btn-close',
    dropdownButton: '.ch-dropdown-toggle',
    dropdownContent: '.ch-dropdown-content'
  };

  var ClassName = {
    active: 'active',
    visible: 'visible'
  };

  var show = function show(dropdownMenu) {
    dropdownMenu.classList.add(ClassName.visible);
    dropdownMenu.parentElement.classList.add(ClassName.active);

    definePosition(dropdownMenu);
  };

  var hide = function hide(dropdownMenu) {
    dropdownMenu.classList.remove(ClassName.visible);
    dropdownMenu.parentElement.classList.remove(ClassName.active);
  };

  var toggle = function toggle(dropdownMenu) {
    if (dropdownMenu.classList.contains(ClassName.visible) === false) {
      show(dropdownMenu);
    } else {
      hide(dropdownMenu);
    }
  };

  var definePosition = function definePosition(dropdownMenu) {
    var _dropdownMenu$classLi, _dropdownMenu$classLi2;

    var initialPosition = "";
    var validPositions = ['top', 'right', 'left', 'bottom'];

    (_dropdownMenu$classLi = dropdownMenu.classList).remove.apply(_dropdownMenu$classLi, validPositions);
    initialPosition = dropdownMenu.dataset.position ? dropdownMenu.dataset.position.split(" ") : ['bottom', 'right'];
    (_dropdownMenu$classLi2 = dropdownMenu.classList).add.apply(_dropdownMenu$classLi2, _toConsumableArray(initialPosition));

    positionLastResort(dropdownMenu);
  };

  var positionLastResort = function positionLastResort(dropdownMenu) {
    if ($(dropdownMenu).offset().left < 0) {
      dropdownMenu.classList.remove('right');
      dropdownMenu.classList.add('left');
    }

    if (document.body.scrollWidth > window.innerWidth) {
      dropdownMenu.classList.remove('left');
      dropdownMenu.classList.add('right');
    }
  };

  var dropdown = function dropdown(button) {
    var dropdownMenu = button.nextElementSibling;

    if (event.target === button || event.target.parentElement === button) {
      toggle(dropdownMenu);
    } else if ($(event.target).parents(Selector.dropdownContent)[0] === dropdownMenu) {
      return;
    } else {
      hide(dropdownMenu);
    }
  };

  var close = function close(button) {
    if (event.target === button || event.target.parentElement === button) {
      hide(button.offsetParent);
    }
  };

  var handleDropdown = function handleDropdown(event) {
    var dropdownButtons = document.querySelectorAll(Selector.dropdownButton);
    dropdownButtons.forEach(dropdown);
  };

  var handleCloseDropdown = function handleCloseDropdown(e) {
    var dropdownCloseButtons = document.querySelectorAll(Selector.closeButton);
    dropdownCloseButtons.forEach(close);
  };

  document.addEventListener('click', handleDropdown);
  document.addEventListener('click', handleCloseDropdown);
};

Chameleon.Components.Menu = function () {
  var Selector = {
    button: '.ch-menu-item .ch-dropdown-button',
    collapseButton: '.ch-expand-button > button',
    navContainer: '.ch-nav',
    navMenu: '.ch-menu',
    navHeader: '.ch-header-nav',
    moreOptionsButton: '.btn-more-options',
    toggleButton: '[data-toogle="nav"]',
    dropdown: '.ch-dropdown',
    logo: '.ch-logo',
    navElements: '.ch-nav, .ch-nav > .ch-menu',
    icon: '.fa-icon',
    header: '.ch-header'
  };

  var ClassName = {
    open: 'open',
    active: 'active',
    hover: 'hover',
    collapsed: 'collapsed',
    hasShadow: 'has-shadow',
    sticky: 'sticky'
  };

  var toggleMenuDropdown = function toggleMenuDropdown() {
    var $dropdown = $(this).parent(Selector.dropdown);
    var $dropdownSiblings = $dropdown.siblings();

    if ($dropdownSiblings.hasClass(ClassName.open)) {
      $dropdownSiblings.removeClass(ClassName.open);
    }

    $dropdown.toggleClass(ClassName.open);

    if ($(window).width() <= 768 && !$(Selector.navContainer).hasClass(ClassName.active)) {
      toggleNav();
    }
  };

  var toogleLogoShadow = function toogleLogoShadow() {
    if ($(this).scrollTop() > 0) {
      $(Selector.logo).addClass(ClassName.hasShadow);
    } else {
      $(Selector.logo).removeClass(ClassName.hasShadow);
    }
  };

  var toggleNavCollapse = function toggleNavCollapse() {
    if ($(Selector.navContainer).hasClass(ClassName.hover)) {
      $(Selector.navContainer).removeClass(ClassName.hover);
    }

    $(Selector.navContainer).toggleClass(ClassName.collapsed);
  };

  var toggleNav = function toggleNav() {
    $(Selector.navContainer).toggleClass(ClassName.active);
    $(Selector.toggleButton).find(Selector.icon).switchClass('fa-ellipsis-h-alt', 'fa-times');

    if (!$(Selector.navContainer).hasClass(ClassName.active)) {
      $(Selector.dropdown).removeClass(ClassName.open);
    }
  };

  var moreOptions = function moreOptions(event) {
    $(Selector.navHeader).toggleClass(ClassName.active);
    $(this).find(Selector.icon).switchClass('fa-angle-double-left', 'fa-angle-double-right');
  };

  var showMenu = function showMenu() {
    if ($(Selector.navContainer).hasClass(ClassName.collapsed)) {
      $(Selector.navContainer).addClass(ClassName.hover);
    }
  };

  var hideMenu = function hideMenu() {
    if ($(Selector.navContainer).hasClass(ClassName.collapsed)) {
      $(Selector.navContainer).removeClass(ClassName.hover);
    }
  };

  var stickyHeader = function stickyHeader() {
    if ($(window).scrollTop() > 0) {
      $(Selector.header).addClass(ClassName.sticky);
    } else {
      $(Selector.header).removeClass(ClassName.sticky);
    }
  };

  $(document).on('click', Selector.button, toggleMenuDropdown);
  $(document).on('click', Selector.collapseButton, toggleNavCollapse);
  $(document).on('click', Selector.toggleButton, toggleNav);
  $(document).on('click', Selector.moreOptionsButton, moreOptions);
  $(document).on('mouseenter', Selector.navElements, showMenu);
  $(document).on('mouseleave', Selector.navContainer, hideMenu);
  $(Selector.navMenu).on('scroll', toogleLogoShadow);
  $(document).on('scroll', stickyHeader);
};

Chameleon.Components.Message = function () {
  var Message = function () {
    function Message() {
      _classCallCheck(this, Message);

      var $ = document.querySelector.bind(document);
      this.closeButton = $('[data-action="close"]');
      this.contentFlashMessage = $('[data-type="flash_message"]');
    }

    _createClass(Message, [{
      key: '_addEventToClose',
      value: function _addEventToClose() {
        this.closeButton.addEventListener('click', function () {
          this.parentNode.classList.add('ch-message--hide');
        });
      }
    }, {
      key: '_addTimerToClose',
      value: function _addTimerToClose() {
        var _this = this;

        setTimeout(function () {
          _this.contentFlashMessage.classList.add('ch-message--hide');
        }, 4000);
      }
    }, {
      key: '_handleCloseMessage',
      value: function _handleCloseMessage() {
        if (this.contentFlashMessage !== null) {
          this._addEventToClose();
          this._addTimerToClose();
        }
      }
    }]);

    return Message;
  }();

  var flashMessage = new Message();

  flashMessage._handleCloseMessage();
};

Chameleon.Components.Modal = function () {
  var Selector = {
    dialog: '.ch-dialog',
    dialogElements: '.ch-dialog-container, .action-dialog',
    dialogContainer: '.ch-dialog-container',
    modals: '[data-target="modal"]',
    closeTargets: '.ch-overlay, .btn-close-dialog'
  };

  var ClassName = {
    active: 'active'
  };

  var $modal = $(Selector.dialog);

  var open = function open(e) {
    e.preventDefault();
    var modalType = $(this).data('modal'),
        $targetModal = $('[data-modal=\'' + modalType + '\']');

    $targetModal.show(300);
    $targetModal.find(Selector.dialogElements).addClass(ClassName.active);
    $targetModal.focus();
  };

  var close = function close() {
    $modal.find(Selector.dialogElements).removeClass(ClassName.active);
    $modal.hide(300);
  };

  $(document).on('click', Selector.modals, open);

  $(document).on('click', Selector.closeTargets, close);

  $modal.on('keydown', function (e) {
    $.keyboardClose(e, close);
  });

  $(document).on('click', Selector.dialogContainer, function (e) {
    e.stopPropagation();
  });
};

Chameleon.Components.Search = function () {
  var Selector = {
    searchButtonTarget: '[data-target="search"]',
    searchContainer: '.ch-search',
    searchResults: '.ch-search-results',
    searchInput: '.ch-search-form-input',
    searchContent: '.ch-search-content',
    modal: '.ch-sidebar',
    closeButtonsTargets: '.ch-search .btn-close, .ch-overlay'
  };

  var $search = $(Selector.searchContainer);
  var $searchResults = $search.find(Selector.searchResults);
  var $modal = $(Selector.modal);

  var open = function open(e) {
    e.preventDefault();
    $search.show();
    $search.find(Selector.searchResults).hide();
    $search.find(Selector.searchInput).val('').focus();
  };

  var close = function close() {
    $search.hide(300);

    if ($modal.find('.inside').is(':visible')) {
      $modal.focus();
    }
  };

  var toggleResults = function toggleResults() {
    $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  };

  $(document).on('click', Selector.searchButtonTarget, open);

  $(document).on('click', Selector.searchContent, function (e) {
    e.stopPropagation();
  });

  $(document).on('click', Selector.closeButtonsTargets, close);

  $search.on('keydown', function (e) {
    $.keyboardClose(e, close);
  });

  $(document).on('input', Selector.searchInput, toggleResults);
};

Chameleon.Components.Table = function () {
  var Selector = {
    icon: '.icon',
    sidebar: '.ch-sidebar',
    detailsTarget: '[data-table-detail="toggle"]',
    rowLink: '.row-link',
    sidebarTarget: '[data-sidebar="toggle"]'
  };

  var ClassName = {
    right: 'right',
    left: 'left',
    inactive: 'inactive',
    up: 'up',
    down: 'down',
    hidden: 'hidden'
  };

  var clickableRow = function clickableRow() {
    var sel = getSelection().toString();

    if (!sel) {
      window.location = $(this).data("href");
    }
  };

  var toggleDetailView = function toggleDetailView(e) {
    e.stopPropagation();
    var $detailRow = $(this).parents('tr').next('tr'),
        $buttonIcon = $(this).find(Selector.icon);

    $detailRow.toggleClass(ClassName.hidden);
    $buttonIcon.switchClass(ClassName.down, ClassName.up);
  };

  var toggleSidebarCollapse = function toggleSidebarCollapse() {
    var $container = $(this).prev(Selector.sidebar),
        $collapseButton = $(this);

    $collapseButton.find(Selector.icon).switchClass(ClassName.right, ClassName.left);
    $collapseButton.toggleClass(ClassName.inactive);
    $container.toggleClass(ClassName.inactive);
  };

  $(document).on('click', Selector.detailsTarget, toggleDetailView);

  $(document).on('click', Selector.rowLink, clickableRow);

  $(document).on('click', Selector.sidebarTarget, toggleSidebarCollapse);
};

Chameleon.Utils = function () {
  $.fn.switchClass = function (class1, class2) {
    if (this.hasClass(class1)) {
      this.removeClass(class1);
      this.addClass(class2);
    } else {
      this.removeClass(class2);
      this.addClass(class1);
    }
  };

  $.keyboardClose = function (e, closeFunction) {
    var code = e.keyCode || e.which;
    if (code === 27 && $('.ch-overlay').is(':visible')) {
      closeFunction();
    }
  };
}();
