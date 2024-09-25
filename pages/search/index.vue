<template>
  <div class="w-full flex justify-center px-5 items-center mt-5">
    <!-- Input Pencarian dengan Icon -->
    <div
      class="w-[300px] h-[48px] border rounded-full flex items-center px-4 bg-white shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6 text-gray-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        class="ml-2 w-full h-full border-none focus:outline-none text-gray-700"
        type="text"
        placeholder="Pencarian"
      />
    </div>

    <!-- Grid ke-2: Icon Filter (Sesuai Gambar) -->
    <div
      class="ml-3 w-[48px] h-[48px] rounded-md border flex justify-center items-center hover:bg-gray-100 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="w-6 h-6 text-gray-500"
      >
        <path d="M3 4h18M8 10h8M10 16h4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <!-- Grid ke-3: Icon Notifikasi (Sesuai Gambar) -->
    <div
      class="ml-3 w-[48px] h-[48px] rounded-md border flex justify-center items-center hover:bg-gray-100 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6 text-gray-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles */
</style>
