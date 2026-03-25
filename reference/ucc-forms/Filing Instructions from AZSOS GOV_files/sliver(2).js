/*
 * This file is for overrides only. Otherwise, keep this file empty.
 */

jQuery(document).ready(function ($){
  const newItem = `
    <li class="sliver-item state-services health">
      <a href="https://www.azdhs.gov/azrx/" target="_blank">
        <span class="main-text"><span class="mobilehide">Save with </span>AZRx</span>
      </a>
    </li>`;

  $('.sliver-nav').append(newItem);
});
