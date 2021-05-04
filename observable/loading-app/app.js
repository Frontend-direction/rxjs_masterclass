const loadingOverlay = document.getElementById('loading-overlay');

loadingService.loadingState$.subscribe(isLoading => {
  if(isLoading) {    
    loadingOverlay.classList.add('open');    
  } else {    
    loadingOverlay.classList.remove('open')
  }
});

loadingService.showLoader();

setTimeout(() => loadingService.hideLoader(), 3000);
