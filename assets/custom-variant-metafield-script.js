function raviHideAllVariantDescriptionExcept(variant) {
  document.querySelectorAll('.custom-variant-description').forEach(el => {
    el.style.display = 'none';
  });

  const descriptionEl = document.querySelector(`.custom-variant-description[data-variant-id="${variant}"]`);
  if (descriptionEl) {
    descriptionEl.style.display = 'block';
  }
}

function raviUpdateVariantDescription() {
  const queryString = location.search;
  const urlParams = new URLSearchParams(queryString);
  let variantId = '{{ product.variants.first.id }}';

  if (urlParams.get('variant')) {
    variantId = urlParams.get('variant');
  } else {
    const currentVariantId = document.querySelector('.product-variant-id')?.value;
    if (currentVariantId) {
      variantId = currentVariantId;
    }
  }

  raviHideAllVariantDescriptionExcept(variantId);
}

document.addEventListener("DOMContentLoaded", (event) => {
  raviUpdateVariantDescription();
  document.querySelector("input[type='hidden'].product-variant-id").addEventListener('change', raviVariantChanged);
});

function raviVariantChanged() {
  let variantId = document.querySelector('.product-variant-id')?.value;

  if (!variantId) {
    variantId = '{{ product.variants.first.id }}';
  }

  raviHideAllVariantDescriptionExcept(variantId);
}


document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.tab-a');

  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener('click', function (event) {
      event.preventDefault();

      const dataId = this.getAttribute('data-id');

      document.querySelectorAll('.tab').forEach(function (tab) {
        tab.classList.remove('tab-active');
      });

      const activeTab = document.querySelector(".tab[data-id='" + dataId + "']");
      if (activeTab) {
        activeTab.classList.add('tab-active');
      }

      tabLinks.forEach(function (link) {
        link.classList.remove('active-a');
      });

      this.classList.add('active-a');
    });
  });
});