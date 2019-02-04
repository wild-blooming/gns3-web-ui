export interface IosTemplate {
    auto_delete_disks: boolean;
    builtin: boolean;
    category: string;
    chassis: string;
    compute_id: string;
    console_auto_start: boolean;
    console_type: string;
    default_name_format: string;
    disk0: number;
    disk1: number;
    exec_area: number;
    idlemax: number;
    idlepc: string;
    idlesleep: number;
    image: string;
    iomem: number;
    mac_addr: string;
    mmap: boolean;
    name: string;
    nvram: number;
    platform: string;
    private_config: string;
    ram: number;
    slot0: string;
    sparsemem: boolean;
    startup_config: string;
    symbol: string;
    system_id: string;
    template_id: string;
    template_type: string;
    usage: string;
    wic0: string;
    wic1: string;
}
